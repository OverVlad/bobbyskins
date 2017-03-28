import { combineReducers } from 'redux';
import chat from './chat';
import user from './user';

const rootReducer = combineReducers({
  chat,
  user
});

export default rootReducer;
