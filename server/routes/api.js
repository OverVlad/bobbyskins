const express = require('express');
const router = express.Router();

const rooms = require('./rooms');
const messages = require('./messages');
const roulette = require('./roulette');
const poker = require('./poker');

router.use('/rooms', rooms);
router.use('/messages', messages);
router.use('/roulette', roulette);
router.use('/poker', poker);

module.exports = router;
