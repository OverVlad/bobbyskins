import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';
import chatroomReducer from './chatroomReducer';
import rouletteReducer from './rouletteReducer';

export default combineReducers({
  chatroom: chatroomReducer,
  user: userReducer,
  auth: authReducer,
  rooms: roomsReducer,
  roulette: rouletteReducer
});
