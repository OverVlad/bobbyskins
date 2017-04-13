import { combineReducers } from 'redux';
import chatroomReducer from './chatroomReducer';
import user from './user';

export default combineReducers({
  chatroom: chatroomReducer,
  user
});
