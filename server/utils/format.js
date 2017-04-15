exports.formatUserObject = function (userData) {
  return {
    id: userData._id,
    username: userData.username,
    avatar: userData.avatar,
    steamId: userData.steamId,
    role: userData.role
  };
};

exports.formatChatMessage = function (socket, message) {
  const { currentChatroomId, user: { username, avatar, _id } } = socket;

  return {
    chatroom_id: currentChatroomId,
    text: message,
    creator: {
      username,
      avatar,
      _id
    }
  };
};
