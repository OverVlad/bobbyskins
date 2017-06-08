const express = require('express');
const router = express.Router();

const Bet = require('../models/Bet');
const PokerBet = require('../models/PokerBet');

router.get('/:id/roulette-stats', function (req, res, next) {
  Bet.getStat(req, res);
});

router.get('/:id/poker-stats', function (req, res, next) {
  PokerBet.getStat(req, res);
});

module.exports = router;
