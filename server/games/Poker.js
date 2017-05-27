const fs = require('fs');
const { generateNumber, randCombination } = require('../utils/generateNumber');
const path = require('path');

class Poker {
  constructor() {
    this.combination = '';
    this.cards = [];
    fs.readFile(path.join(__dirname, '../../pokerCombinations.json'), { encoding: 'utf8' }, (err, data) => {
      this.allComb = JSON.parse(data);
    });
  }

  getCards() {
    const combination = randCombination();
    const combinationCount = this.allComb[combination].length - 1;

    return this.allComb[combination][generateNumber(combinationCount)];
  }
}

module.exports = Poker;
