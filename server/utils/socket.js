module.exports = (server) => (sessionMiddleware) => {
  const url = require('url');
  const io = require('socket.io')(server);
  const AuthError = require('../errors/AuthError');
  const { formatChatMessage, formatBet, formatUser } = require('./format');
  const Roulette = require('../games/Roulette');


  const Message = require('../models/Message');
  const Bet = require('../models/Bet');
  const Round = require('../models/Round');
  const User = require('../models/User');

  io.use(applySessionMiddleware);
  io.use(checkAuth);

  const roulette = new Roulette(io, Round);

  io.on('connection', function (socket) {

    socket.on('join chatroom', function (data) {
      const { id: room } = data;

      socket.join(room);

      io.to(room).emit('join chatroom', {
        user: socket.user,
        counter: socket.adapter.rooms[room].length
      });

      socket.currentChatroomId = room;
    });

    socket.on('leave chatroom', function (data) {
      const { id: room } = data;

      io.to(room).emit('leave chatroom', {
        user: socket.user,
        counter: socket.adapter.rooms[room] ? socket.adapter.rooms[room].length - 1 : null
      });

      socket.leave(room);
    });



    socket.on('join roulette', function (round) {
      socket.join('roulette');

      const userId = socket.user._id;
      const transform = roulette.getTransform();

      roulette.getOwnBets(userId)
      .then((bets) => {
        let ownBets = {
          'odd': 0,
          '1-7': 0,
          '0': 0,
          '8-14': 0,
          'even': 0
        };

        bets.map((bet) => {
          ownBets[bet.type] = bet.amount;
        });

        const round = {
          id: roulette.getRoundId(),
          startTime: roulette.getStartTime(),
          totalBets: roulette.getTotalBets(),
          ownBets
        };

        const user = User.findOne({_id: userId}, 'balance')
        .then((user) => {
          const balance = user.balance;
          io.emit('join roulette', { round, balance, transform });
        });
      });
    });

    socket.on('change transform', (transform) => {
      roulette.changeTransform(transform);
    });



    socket.on('message', function (message) {
      const tempMessage = formatChatMessage(socket, message);

      const newMessage = new Message({
        chatroom_id: tempMessage.chatroom_id,
        text: message,
        creator: tempMessage.creator
      });

      tempMessage._id = newMessage._id;
      tempMessage.createdAt = (new Date()).toISOString();

      newMessage.save();

      io.to(socket.currentChatroomId).emit('message', tempMessage); // send a message right away without waiting for DB
    });

    socket.on('history rolls', function (historyRolls = []) {
      Round
      .find()
      .sort('-createdAt')
      .limit(11)
      .select('roll')
      .then((rounds) =>  {
        rounds.slice(0);
        rounds.forEach((round) => {
          if(round.roll !== undefined && round.roll !== null) {
            historyRolls.push(round.roll);
            historyRolls = (historyRolls.length > 10) ? historyRolls.slice(1) : historyRolls;
          } else {
            console.log(`Round with id ${round._id} has null roll`);
          }
        });

        io.emit('history rolls', historyRolls);
      });
    });

    socket.on('add bet', function (bet) {
      const betUser = formatUser(socket);
      betUser.bet = bet;
      const formatedBet = formatBet(socket, bet);
      const newBet = new Bet(formatedBet);
      const id = socket.user._id;

      roulette.refreshTotalBets(formatedBet, betUser);

      const user = User.findOne({_id: id})
      .then((user) => {
        if(user.balance < formatedBet.amount) {
          io.emit('error', 'You do not have enough coins on your balance');
        } else {
          user.balance -= formatedBet.amount;
          user.save(user.balance);
          const balance = user.balance;

          newBet.save()
          .then((bet) => {
            io.emit('add bet', {bet, balance});
            io.emit('refresh totalBets', roulette.getTotalBets());
          })
          .catch((error) => console.log(error));
        }
      })
      .catch(err => console.log(err));
    });

    socket.on('refresh balance', function(userId) {
      User.findOne({_id: userId})
      .then((user) => {
        const balance = user.balance;

        io.emit('refresh balance', balance);
      })
    });



    socket.on('disconnect', function () {
      const { currentChatroomId } = socket;

      io.to(currentChatroomId).emit('leave chatroom', {
        user: socket.user,
        counter: socket.adapter.rooms[currentChatroomId] ? socket.adapter.rooms[currentChatroomId].length  : null
      });

    });
  });

  function applySessionMiddleware(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
  }

  function checkAuth(socket, next) {
    if (!socket.request.session.passport) {
      next(new AuthError(404));
      return;
    }

    socket.user = socket.request.session.passport.user;

    next();
  }

  return io;
};
