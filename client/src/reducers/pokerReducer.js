import initialState from './initialState'
import * as constants from '../constants/pokerConstants';

function pokerReducer(state = initialState.poker, action) {
  switch (action.type) {
    case constants.ADD_BET:
      return {
        ...state,
        poker: { ...state.poker, betAmount: action.bet }
      }
    case constants.ROLL_CARDS:
      return {
        ...state,
        hand: action.cards
      };
    default:
      return state
  }
}

export default pokerReducer
