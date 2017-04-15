const mongoose = require('../mongoose');

const fakeUsers = require('./fakeUsers.json');
const fakeChatRooms = require('./fakeChatRooms.json');

/*
* This module is intended to create a test database and fill it fill it with some fake data
* */

let ChatRoom;

mongoose.connection.on('open', function () {
  dropDatabase()
    .then(ensureIndexes)
    .then(populateFakeUsers)
    .then(populateFakeChatRooms)
    .then(closeConnection)
    .catch(error => {
      closeConnection();

      console.log(error);
    });
});

function dropDatabase() {
  return mongoose.connection.dropDatabase();
}

function ensureIndexes() {
  ChatRoom = require('../../models/Chatroom');
  User = require('../../models/User');

  const models = Object.keys(mongoose.models).map(model => mongoose.models[model].ensureIndexes());

  return Promise.all(models);
}

function populateFakeUsers() {
  const users = fakeUsers.map(({username, steamId, avatar, role}) => {
    return (new mongoose.models.User({username, steamId, avatar, role}).save());
  });

  return Promise.all(users);
}

function populateFakeChatRooms(users) {
  const chatrooms = fakeChatRooms.map(({creator_steamId, name}) => {
    const user = users.find((user) => user.steamId === creator_steamId);
    console.log('users', users);
    console.log('user', user);
    console.log(user);

    return (new ChatRoom({creator_id: user._id, name}).save());

  });

  return Promise.all([users, Promise.all(chatrooms)]);
}

function closeConnection() {
  return mongoose.disconnect();
}
