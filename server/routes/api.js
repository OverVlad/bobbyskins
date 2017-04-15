const express = require('express');
const router = express.Router();

const rooms = require('./rooms');
const messages = require('./messages');
const roulette = require('./roulette');

router.use('/rooms', rooms);
router.use('/messages', messages);
router.use('/roulette', roulette);

module.exports = router;
