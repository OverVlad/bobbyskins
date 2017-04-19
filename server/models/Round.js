const mongoose = require('../db/mongoose');
const crypto = require('crypto');
const AuthError = require('../errors/AuthError');
const ServerError = require('../errors/ServerError');

const roundSchema = new mongoose.Schema({
  roll: {
    type: Number
  }
});

roundSchema.set('timestamps', true);

const RoundModel = mongoose.model('Round', roundSchema);

module.exports = RoundModel;
