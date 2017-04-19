const mongoose = require('mongoose');

const AccessError = require('../errors/AccessError');
const UndefinedResourceError = require('../errors/UndefinedResourceError');
const DuplicationError = require('../errors/DuplicationError');
const ServerError = require('../errors/ServerError');

const Message = require('./Message');

const chatroomSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  users: {
    type: String
  },
  creator_id: {
    type: String,
    required: true
  }
});

chatroomSchema.set('timestamps', true);

/*
 * Static methods
 * */
chatroomSchema.statics.getRooms = function (req, res) {
  const limit = 10;

  const Chatroom = this;

  let pipeline = [
    {
      $project: {
        name: true,
        creator_id: true,
        createdAt: true
      }
    },
    {
      $limit: limit
    }
  ];

  Chatroom
    .aggregate(pipeline)
    .then(rooms => {
      Chatroom.count()
        .then(count => {
          const isDone = rooms.length < limit;

          return res.status(200).json({
            done: isDone,
            rooms,
            count
          });
        })
        .catch(error => {
          return res.status(500).json(error.message || new ServerError("Error connecting to database"));
        });
    })
    .catch(error => {
      return res.status(500).json(error.message || "Error connecting to database");
    });
};

chatroomSchema.statics.createRoom = function (req, res) {
  const {name, description, tags} = req.body;

  const Chatroom = this;

  Chatroom.findOne({name: name})
    .then(room => {
      if (!room) {
        let newRoomObject = {name, description, tags, creator_id: req.user._id};
        const newRoom = new Chatroom(newRoomObject);

        newRoom.save()
          .then((savedRoom) => {
            newRoomObject.createdAt = savedRoom.createdAt;
            newRoomObject._id = savedRoom._id;

            return res.status(201).json({room: newRoomObject});
          })
          .catch(error => {
            return res.status(500).json(error.message || "Error connecting to database");
          });
      } else {
        return res.status(400).json(`"${name}" room has been created already`);
      }
    })
    .catch(error => {
      res.status(500).json(error.message || "Error connecting to database");
    });
};

chatroomSchema.statics.deleteRoom = function (roomId, createdBy, isAdmin) {
  const Chatroom = this;

  return new Promise((resolve, reject) => {
    Chatroom.findOne({_id: roomId})
      .then(validateRequest)
      .then(room => room.remove())
      .then(deletedRoom => {
        resolve(deletedRoom);

        return deletedRoom;
      })
      .then(deletedRoom => Message.find({chatroom_id: deletedRoom._id}).remove())
      .catch(() => {
        reject(new ServerError("Error connecting to database"));
      });

    function validateRequest(room) {
      if (room.creator_id !== createdBy && !isAdmin) {
        reject(new AccessError("Deletion is not allowed"));
      }

      if (!room) {
        reject(new UndefinedResourceError("Requested resource does not exist"));
      }

      return room;
    }
  });
};

const ChatroomModel = mongoose.model('Chatroom', chatroomSchema);

module.exports = ChatroomModel;
