const express = require('express');
const router = express.Router();

const Chatroom = require('../models/Chatroom');
const User = require('../models/User');
const ServerError = require('../errors/ServerError');
const { validateNewRoomCreation } = require('../utils/validations/roomValidations');

router.get('/', function (req, res, next) {
  Chatroom.getRooms(req, res);
});

router.post('/', function (req, res, next) {
  const { errors, isValid } = validateNewRoomCreation(req.body);

  if (isValid) {
    Chatroom.createRoom(req, res);
  } else {
    return res.status(400).json(errors);
  }
});

router.delete('/:roomId', function (req, res, next) {
  const roomId = req.params.roomId;
  const createdBy = req.user._id;
  const isAdmin = req.user.username === "admin";

  Chatroom.deleteRoom(roomId, createdBy, isAdmin)
    .then(deletedRoom => {
        return res.status(200).json(`#${deletedRoom._id} deleted`);
    })
    .catch(error => {
      return res.status(error instanceof ServerError ? 500 : 400).json(error.message);
    });
});

module.exports = router;
