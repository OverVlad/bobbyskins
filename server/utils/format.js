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

exports.formatBet = function (socket, bet) {
  const { user: { username, avatar, _id } } = socket;

  return {
    round_id: bet.roundId,
    user_id: _id,
    amount: bet.amount,
    type: bet.type
  };
};

exports.formatUser = (socket) => {
  const { user: { username, avatar } } = socket;

  return {
    username,
    avatar
  };
}
