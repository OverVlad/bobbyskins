const mongoose = require('../db/mongoose');

const pokerBetSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collect: {
    type: Number,
  },
  amount: {
    type: Number
  },
  combination: {
    type: String,
    required: true
  }
});

pokerBetSchema.set('timestamps', true);

/*
* Static methods
* */
pokerBetSchema.statics.getStat = function (req, res) {
  const PokerBet = this;
  const userId = req.params.id;

  PokerBet.find()
  .select('_id createdAt amount combination collect')
  .where('user_id').equals(userId)
  .then(pokerBets => res.status(200).json({ pokerBets }))
  .catch(error => {
      return res.status(500).json(error.message || "Error connecting to database");
  });
}

const PokerBetModel = mongoose.model('PokerBet', pokerBetSchema);

module.exports = PokerBetModel;
