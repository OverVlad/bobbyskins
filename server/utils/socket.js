module.exports = (server) => (sessionMiddleware) => {
  const url = require('url');
  const io = require('socket.io')(server);
  const AuthError = require('../errors/AuthError');
  const { formatChatMessage } = require('../utils/format');
  const { generateNumber } = require('./generateNumber');

  const Message = require('../models/Message');
  const Bet = require('../models/Bet');
  const Round = require('../models/Round');

  io.use(applySessionMiddleware);
  io.use(checkAuth);

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

    socket.on('bet', function (bet) {
      const newBet = new Bet({
        user_id: bet.userId,
        round_id: bet.roundId,
        amount: bet.amount,
        type: bet.type
      });

      newBet.save().then((bet) => console.log('Hello: ', bet)).catch((error) => console.log(error));

      io.emit('bet', bet);
    });

    socket.on('historyRoll', function (historyRolls = []) {
      Round
      .find()
      .sort()
      .limit(10)
      .select('roll')
      .then((rolls) =>  {
        rolls.forEach((roll) => {
          historyRolls.push(roll.roll);
          historyRolls = (historyRolls.length > 10) ? historyRolls.slice(1) : historyRolls;
        });

        io.emit('historyRoll', historyRolls);
      });
    });

    socket.on('roll', function () {

      const number = generateNumber();

      io.emit('roll', number);
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
