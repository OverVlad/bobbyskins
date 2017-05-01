import initialState from './initialState'

function pokerReducer(state = initialState.poker, action) {
  switch (action.type) {
    case 'ADD_BET':
      return {
        ...state,
        poker: { ...state.poker, betAmount: action.bet }
      }
    default:
      return state
  }
}

export default pokerReducer
