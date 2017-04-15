import * as constants from '../constants/rouletteConstants';
import initialState from './initialState'

function rouletteReducer(state = initialState.roulette, action) {
  switch (action.type) {
    case constants.FETCH_ROUND_START:
      return {
        ...state,
        isLoading: true
      };

    case constants.FETCH_ROUND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        round: action.round
      };
    case constants.FETCH_ROUND_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case constants.ADD_BET:
      return {
        ...state,
        round: state.round.bets.concat(action.bet)
      };
    default:
      return state;
  }
}

export default rouletteReducer;
