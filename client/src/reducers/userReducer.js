import { user } from './initialState';
import { UPDATE_USER, KILL_USER, REFRESH_BALANCE } from '../constants/userConstants';

function userReducer(state = user, action) {
  switch(action.type) {
    case UPDATE_USER:
      console.log(action);
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
    default:
      return state;
  }
}

export default userReducer;
