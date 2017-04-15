const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/User');
const { formatUserObject } = require('../utils/format');

router.get('/signout', function (req, res, next) {
  req.logout(); // not working properly
  req.session.destroy();

  return res.status(200).json({success: true});
});

router.get('/steam', passport.authenticate('steam'));

router.get('/steam/return', passport.authenticate('steam', {
  successRedirect: '/',
  failureRedirect: '/'
}));

router.get('/verify', function (req, res, next) {
  if (req.user) {
    return res.status(200).json(formatUserObject(req.user));
  }

  return res.status(401).json({success: false});
});

module.exports = router;
