const { generateNumber } = require('../utils/generateNumber');

class Roulette {
  constructor(io, Round) {
    this.io = io;
    this.Round = Round;
    this.accept = 20;
    this.pause = false;
    this.wait = 15;
    this.timer = -1;
    this.timeLeft = 0;

    this.totalBets = {
      'odd': 0,
      '1to7': 0,
      '0': 0,
      '8to14': 0,
      'even': 0
    };

    this._startRoulette();
  }

  _startRoulette() {
    if(!this.pause && this.timer == -1) {
      console.log('Запуск таймера');
      this.timer = this.accept + this.wait;
      this.timeLeft = this.timer-this.wait;
      this.startNewRound();

      const timerID = setInterval(() => {
        if(!this.pause) this.timeLeft = this.timer-this.wait;
        if(this.timer === this.wait) {
          this.preroll();

          this.pause = true;
          console.log('Включена пауза');
        }

        if (this.timer == this.wait - 2) {
          this.startRoll();
          console.log('Таймер сработал');
        }

        if(this.timer == 0) {
          console.log('Обнуление');
          this.timer = this.accept + this.wait;
          this.pause = false;
          this.timeLeft = this.timer-this.wait;
          this.totalBets = []
          this.startNewRound();
        }
        this.timer--
      }, 1000);
    }
  }

  preroll() {
    this.io.emit('preroll');
  }

  startRoll() {
    const number = generateNumber();

    console.log(number);
    this.round.roll = number;
    this.round.save();

    this.io.emit('start roll', number);
  }

  startNewRound() {
    this.round = new this.Round();
    console.log('this.round', this.round);
    this.round.save().then((round) => {
      const formatRound = {
        id: round._id,
        startTime: this.TimeToEnd(),
        roll: '',
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
      this.io.emit('start round', formatRound);
    });

  }

  TimeToEnd() {
    return this.timeLeft;
  }

  getRoundId() {
    return this.round._id;
  }
}


module.exports = Roulette;
