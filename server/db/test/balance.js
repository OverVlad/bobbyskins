const mongoose = require('../mongoose');

mongoose.connection.on('open', function () {
  increaseBalance()
  .then(closeConnection)
  .catch(error => {
    closeConnection();

    console.log(error);
  });
});

function increaseBalance () {
  let User = require('../../models/User');

  return User.find()
  .then((users) => {
    users.map((user) => {
      console.log(user);
      user.balance = 1000000;
      user.save()
      .then(user => console.log(user))
      .catch(err => console.error(err));
    });
  });
}

function closeConnection() {
  return mongoose.disconnect();
}
