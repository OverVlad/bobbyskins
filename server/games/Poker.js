const fs = require('fs');
const { generateNumber, randCombination } = require('../utils/generateNumber');
const path = require('path');
const PokerBet = require('../models/PokerBet');
const User = require('../models/User');

class Poker {
  constructor() {
    this.combination = '';
    this.cards = [];
    this.winNumbers = [-1, 1, 1.5, 2, 2.5, 3, 4, 19, 49, 99];

    fs.readFile(path.join(__dirname, '../../pokerCombinations.json'), { encoding: 'utf8' }, (err, data) => {
      this.allComb = JSON.parse(data);
    });
  }

  getWinForHand(handRank) {
    return this.winNumbers[handRank];
  }

  getCards() {
    const combination = randCombination();
    const combinationCount = this.allComb[combination].length - 1;

    return this.allComb[combination][generateNumber(combinationCount)];
  }
}

module.exports = Poker;
