const mongoose = require('../db/mongoose');

const pokerSchema = new mongoose.Schema({
  combination: {
    type: Number
  },
  cards: {
    type: [String],
    default: []
  }
});

pokerSchema.set('timestamps', true);

const PokerModel = mongoose.model('Poker', pokerSchema);

module.exports = PokerModel;
