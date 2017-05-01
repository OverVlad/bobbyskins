
export const changeUserBalance = (bet, win) => (
  // GOES TO userReducer as specifed in containers/Poker
  { type: 'CHANGE_BALANCE', bet, win }
)

export const rollCards = (bet) => (
  { type: 'ROLL_CARDS', bet }
)
