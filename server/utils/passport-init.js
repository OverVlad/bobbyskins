module.exports = function (passport) {
  const SteamStrategy = require('passport-steam').Strategy;

  const config = require('../config').steam;

  const User = require('../models/User');

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SteamStrategy({
    returnURL: config.returnURL,
    realm: config.realm,
    apiKey: config.apiKey
  },
  function(identifier, profile, done) {

    User.findOne({ steamId: profile.id }, function (err, user) {
      if (err) {
        done(err);
      }

      if (!user) {
        const newUser = new User({
          username: profile.name || profile.displayName,
          avatar: profile.photos[0].value,
          steamId: profile.id
        });

        newUser.save()
        .then((user) => {
          done(null, user);
        })
        .catch(error => {
          done(error);
        });
      } else {
        done(null, user);
      }
    });
  }
));
};
