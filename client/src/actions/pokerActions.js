
export const changeUserBalance = (bet, win) => (
  { type: 'CHANGE_BALANCE', bet, win }
)

export const rollCards = (bet) => (
  { type: 'ROLL_CARDS', bet }
)
