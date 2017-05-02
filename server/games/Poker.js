class Poker {
  constructor() {
    this.combination = '';
    this.cards = [];
  }

  _generateCombination() {

  }

  _randSector(spec) {
    const random = Math.random();
    let sum = 0;

    for (let i in spec) {
      sum += spec[i];
      if (random <= sum) return i;
    }
  }
}

module.exports = Poker;
