import * as constants from '../constants/rouletteConstants';
import { roulette } from './initialState'

function rouletteReducer(state = roulette, action) {
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
    case constants.REFRESH_TOTAL_BETS:
      return {
        ...state,
        round: {
          ...state.round,
          totalBets: action.totalBets
        }
      };
    case constants.FETCH_ROUND_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case constants.START_ROLL:
      return {
        ...state,
        isRoll: true,
        round: { 
          ...state.round, 
          roll: action.roll 
        }
      };
    case constants.START_ROUND:
    return {
      ...state,
      round: action.round
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
    case constants.ADD_BET:
    return {
        ...state,
        round: {
          ...state.round,
          ownBets: {
            ...state.round.ownBets, [action.bet.type] : action.bet.amount
          }
      }
    };
    case constants.SET_WINNERS:
      return {
        ...state,
        round: {
          ...state.round,
          winTypes: action.winTypes
        }
      };
    default:
      return state;
  }
}

export default rouletteReducer;
