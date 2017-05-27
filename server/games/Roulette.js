const { generateNumber } = require('../utils/generateNumber');
const moment = require('moment');
const Bet = require('../models/Bet');
const User = require('../models/User');

class Roulette {
  constructor(io, Round) {
    this.io = io;
    this.Round = Round;
    this.accept = 20;
    this.pause = false;
    this.wait = 15;
    this.timer = -1;
    this.timeLeft = 0;
    this.transform = 0;

    this.multipliers = {
      'odd': 2,
      '1-7': 2,
      '0': 14,
      '8-14': 2,
      'even': 2
    }

    this.totalBets = {
      'odd': {
        amount: 0,
        people: 0,
        bets: []
      },
      '1-7': {
        amount: 0,
        people: 0,
        bets: []
      },
      '0': {
        amount: 0,
        people: 0,
        bets: []
      },
      '8-14': {
        amount: 0,
        people: 0,
        bets: []
      },
      'even': {
        amount: 0,
        people: 0,
        bets: []
      }
    };

    this._startRoulette();
  }

  _startRoulette() {
    if (!this.pause && this.timer == -1) {
      this.timer = this.accept + this.wait;
      this.timeLeft = this.timer - this.wait;
      this.startTime = new Date();
      this.startNewRound();

      const timerID = setInterval(() => {
        if (!this.pause) this.timeLeft = this.timer - this.wait;
        if (this.timer === this.wait) {
          this.preroll();

          this.pause = true;
        }

        if (this.timer == this.wait - 2) {
          this.startRoll();
          this.setWinners();
        }

        if (this.timer == 0) {
          this.timer = this.accept + this.wait;
          this.pause = false;
          this.timeLeft = this.timer - this.wait;
          this.totalBets = []
          this.startNewRound();
        }
        this.timer--
      }, 1000);
    }
  }

  preroll() {
    this.io.to('roulette').emit('preroll');
  }

  startRoll() {
    this.io.to('roulette').emit('start roll', this.round.roll);
  }

  startNewRound() {
    const number = generateNumber();

    this.round = new this.Round({
      roll: number
    });

    this.totalBets = {
      'odd': {
        amount: 0,
        people: 0,
        bets: []
      },
      '1-7': {
        amount: 0,
        people: 0,
        bets: []
      },
      '0': {
        amount: 0,
        people: 0,
        bets: []
      },
      '8-14': {
        amount: 0,
        people: 0,
        bets: []
      },
      'even': {
        amount: 0,
        people: 0,
        bets: []
      }
    }

    this.round.save().then((round) => {
      this.startTime = new Date();
      const formatRound = { //TODO: bring out to utils
        id: round._id,
        startTime: this.getStartTime(),
        roll: '',
        winTypes: '',
        totalBets: {
          'odd': {
            people: 0,
            count: 0,
            bets: []
          },
          '1-7': {
            people: 0,
            count: 0,
            bets: []
          },
          '0': {
            people: 0,
            count: 0,
            bets: []
          },
          '8-14': {
            people: 0,
            count: 0,
            bets: []
          },
          'even': {
            people: 0,
            count: 0,
            bets: []
          }
        },
        ownBets: {
          'odd': 0,
          '1-7': 0,
          '0': 0,
          '8-14': 0,
          'even': 0
        },
      }
      this.io.to('roulette').emit('start round', formatRound);
    });
  }

  getTotalBets() {
    return this.totalBets;
  }

  TimeToEnd() {
    return this.timeLeft;
  }

  getStartTime() {
    return this.startTime;
  }

  getRoundId() {
    return this.round._id;
  }

  refreshTotalBets(bet, user) {
    this.totalBets[bet.type].amount += bet.amount;
    this.totalBets[bet.type].people += 1;
    this.totalBets[bet.type].bets.push(user);
  }


  getOwnBets(userId) {
    return Bet
      .find()
      .where('round_id').equals(this.round._id)
      .where('user_id').equals(userId)
      .select('amount type');
  }

  getWinTypes() {
    const roll = this.round.roll;
    let winTypes = [];

    if (roll === 0) {
      winTypes = ['0'];
    } else {
      if (roll > 0 && roll < 8)
        winTypes.push('1-7');
      else if (roll >= 8 && roll <= 14) {
        winTypes.push('8-14');
      }

      if (roll % 2 === 0) {
        winTypes.push('even');
      } else if (roll % 2 !== 0) {
        winTypes.push('odd');
      }
    }

    this.io.to('roulette').emit('win types', winTypes);

    return winTypes;
  }

  setWinners() {
    const winTypes = this.getWinTypes();
    const BetsWin = [];

    Bet
      .find()
      .where('round_id').equals(this.round._id)
      .then((bets) => {
        bets.map((bet) => {
          winTypes.map((winType) => {
            if (bet.type === winType) {
              BetsWin.push(bet);
            }
          })
        });
        return this.setWinnerCoins(BetsWin);
      });
  }

  setWinnerCoins(BetsWin) {
    return BetsWin.map((bet) => {
      User
        .findOne({ _id: bet.user_id })
        .then((user) => {
          user.balance += bet.amount * this.multipliers[bet.type];
          user.save();
        })
    })
  }

  changeTransform(transform) {
    this.transform = transform;
  }

  getTransform() {
    return this.transform;
  }
}


module.exports = Roulette;
