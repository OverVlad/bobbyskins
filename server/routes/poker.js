const express = require('express');
const router = express.Router();

const poker = require('../games/Poker');
const Poker = new poker();

router.get('/', function (req, res, next) {
  res.send(Poker.getCards());
});

module.exports = router;
