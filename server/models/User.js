const mongoose = require('../db/mongoose');
const crypto = require('crypto');
const AuthError = require('../errors/AuthError');
const ServerError = require('../errors/ServerError');

const userSchema = new mongoose.Schema({
  steamId: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    require: true,
  },
  avatar: {
    type: String
  },
  balance: {
    type: Number,
    require: true,
    default: 0
  },
  role: {
    type: String,
    require: true,
    default: 'user'
  }
});

userSchema.set('timestamps', true);

/*
* Static methods
* */


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
