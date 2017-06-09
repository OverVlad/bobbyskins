exports.formatUserObject = (userData) => {
  return {
    id: userData._id,
    username: userData.username,
    avatar: userData.avatar,
    steamId: userData.steamId,
    role: userData.role,
    balance: userData.balance
  };
};

exports.formatChatMessage = (socket, message) => {
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

exports.formatBet = (socket, bet) => {
  const { user: { username, avatar, _id } } = socket;

  return {
    round: bet.roundId,
    user: _id,
    amount: bet.amount,
    type: bet.type
  };
};

exports.formatPokerBet = (socket, pokerBet) => {
  const { user: { _id } } = socket;

  return {
    user_id: _id,
    amount: pokerBet.amount,
    collect: pokerBet.collect,
    combination: pokerBet.handRank
  };
};

exports.formatUser = (socket) => {
  const { user: { username, avatar } } = socket;

  return {
    username,
    avatar
  };
}
