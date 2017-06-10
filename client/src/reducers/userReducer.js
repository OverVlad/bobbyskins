import { user } from './initialState';
import { UPDATE_USER, KILL_USER, REFRESH_BALANCE } from '../constants/userConstants';
import * as profile from '../constants/profileConstants';

function userReducer(state = user, action) {
  switch(action.type) {
    case UPDATE_USER:
      return {
        ...state,
        id: action.id,
        username: action.username,
        avatar: action.avatar,
        role: action.role,
        steamId: action.steamId,
        balance: action.balance
      };
    case 'CHANGE_BALANCE':
      return {
        ...state,
        balance: (state.balance + (action.bet * action.win)),
      }
    case KILL_USER:
      return {
        id: '',
        username: '',
        avatar: '',
        role: user.role,
        steamId: '',
      };
    case REFRESH_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case profile.REQUEST_COMMON_INFO:
      return {
        ...state,
        isFetching: true
      }
    case profile.RECEIVE_COMMON_INFO:
      return {
        ...state,
        isFetching: false,
        commonInfo: action.commonInfo
      }
    case profile.REQUEST_REFERALS:
      return {
        ...state,
        isFetching: true
      }
    case profile.RECEIVE_REFERALS:
      return {
        ...state,
        isFetching: false,
        referals: action.referals
      }
    case profile.REQUEST_TRADE_HISTORY:
      return {
        ...state,
        isFetching: true
      }
    case profile.RECEIVE_TRADE_HISTORY:
      return {
        ...state,
        isFetching: false,
        tradeHistory: action.tradeHistory
      }
    case profile.REQUEST_ROULETTE_STATS:
      return {
        ...state,
        rouletteStatsIsFetching: true
      }
    case profile.RECEIVE_ROULETTE_STATS:
      return {
        ...state,
        rouletteStatsIsFetching: false,
        rouletteStats: action.rouletteStats
      }
    case profile.REQUEST_POKER_STATS:
      return {
        ...state,
        pokerStatsIsFetching: true
      }
    case profile.RECEIVE_POKER_STATS:
      return {
        ...state,
        pokerStatsIsFetching: false,
        pokerStats: action.pokerStats
      }
    default:
      return state;
  }
}

export default userReducer;
