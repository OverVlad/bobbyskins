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
    case constants.START_ROLL:
    return {
      ...state,
      round: { ...state.round, roll: action.roll },
      isRoll: true
    };
    case constants.START_ROUND:
    return {
      ...state,
      round: { ...state.round, ...action.round }
    };
    case constants.JOIN_ROULETTE:
    return {
      ...state,
      done: true,
      round: { ...state.round, ...action.round }
    };
    case constants.REFRESH_HISTORY:
    return {
      ...state,
      historyRolls: action.historyRolls
    };
    case constants.ADD_TO_HISTORY:
    return {
      ...state,
      historyRolls: action.historyRolls.map( (item, index) => {
        if(index !== historyRolls.length - 1) {
          return action.roll;
        }
        return item;
      })
    };
    case constants.FINISH_ROLL:
    return {
      ...state,
      isRoll: false
    };
    default:
    return state;
  }
}

export default rouletteReducer;
