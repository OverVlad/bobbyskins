import initialState from './initialState'

function pokerReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BET':
      return {
        ...state,
        poker: { ...state.poker, betAmount: action.bet }
      }
    case 'CHANGE_BALANCE':
      console.log('pokerReducer CHANGE_BALANCE ' + (state.user.balance + (action.bet*action.win)))
      return {
        ...state,
        user: {
          ...state.user,
          balance: state.user.balance + (action.bet*action.win),
        },
      }
    default:
      return state
  }
}

export default pokerReducer
