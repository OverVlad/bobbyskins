import initialState from './initialState';
import { UPDATE_USER, KILL_USER } from '../constants/userConstants';

function userReducer(state = initialState.user, action) {
  switch (action.type) {

    case UPDATE_USER:
      return {
        ...state,
        id: action.id,
        username: action.username,
        avatar: action.avatar,
        role: action.role,
        steamId: action.steamId,
      };
    case 'CHANGE_BALANCE':
      return {
        ...state,
        balance: (state.balance + (action.bet*action.win)),
      }
    case KILL_USER:
      return {
        id: '',
        username: '',
        avatar: '',
        role: user.role,
        steamId: '',
      };

    default:
      return state;
  }
}

export default userReducer;
