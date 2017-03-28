import { ADD_MESSAGE, SET_MESSAGES } from '../constants/actionTypes';

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    messages: messages
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}
