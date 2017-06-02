const mongoose = require('../mongoose');

const ChatRoom = require('../../models/Chatroom');
const User = require('../../models/User');

mongoose.connection.on('open', () => {
  createRooms()
  .then(closeConnection);
});

function createRooms() {
  const newRoom = new ChatRoom({name: 'English', steamId: 76561198028545865});
  return newRoom.save();
}

function closeConnection() {
  mongoose.disconnect();
}
