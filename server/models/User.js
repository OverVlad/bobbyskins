const mongoose = require('../db/mongoose');
const crypto = require('crypto');
const AuthError = require('../errors/AuthError');
const ServerError = require('../errors/ServerError');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  hashedPassword: {
    type: String
  },
  salt: {
    type: String
  },
  avatar: {
    type: String
  },
});

userSchema.set('timestamps', true);

/*
* Static methods
* */


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
