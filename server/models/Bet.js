const mongoose = require('../db/mongoose');

const betSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  round: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Round',
    required: true
  },
  collect: {
    type: Number,
    default: 0
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

betSchema.statics.getStat = function (req, res) {
  const Bet = this;
  const userId = req.params.id;

  Bet.find()
  .select('_id createdAt round amount type collect')
  .where('user').equals(userId)
  .populate('round', 'roll')
  .then((bets) => res.status(200).json({ bets }))
  .catch(error => {
      return res.status(500).json(error.message || "Error connecting to database");
  });
}


const BetModel = mongoose.model('Bet', betSchema);

module.exports = BetModel;
