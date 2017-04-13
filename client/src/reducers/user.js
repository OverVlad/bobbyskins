import initialState from './initialState';
import { UPDATE_USER, KILL_USER } from '../constants/userConstants';

function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case UPDATE_USER:
      return {
        ...state,
        id: action.id,
        username: action.username,
        avatar: action.avatar,
        role: user.role
      };
    case KILL_USER:
      return {
        id: '',
        username: '',
        avatar: '',
        role: user.role
      };

    default:
      return state;
  }
}

export default userReducer;
