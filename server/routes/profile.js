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

router.get('/:id/trade-history', function (req, res, next) {
  res.sentStatus(200);
});

router.get('/:id/referals', function (req, res, next) {
  res.sentStatus(200);
});

router.get('/:id/common-info', function (req, res, next) {
  res.sentStatus(200);
});

module.exports = router;
