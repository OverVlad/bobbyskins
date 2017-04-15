const mongoose = require('../db/mongoose');

const betSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  round_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Round',
    required: true
  },
  collect: {
    type: Number,
  },
  amount: {
    type: Number
  },
  type: {
    type: String,
    required: true
  }
});

betSchema.set('timestamps', true);

/*
* Static methods
* */


const BetModel = mongoose.model('Bet', betSchema);

module.exports = BetModel;
