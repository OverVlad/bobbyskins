import { ADD_MESSAGE, SET_MESSAGES } from '../constants/actionTypes';

const initialState = {
  fetching: false,
  data: [
    {
      name: "ChatBot",
      text: "This is your first message",
      imgUrl: "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/5/2/7/4/global_451101108.jpeg",
      role: 'bot',
      own: false
    }
  ]
};

export default function chat(state = initialState, action) {
  const { type, messages } = action;

  switch (type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        data: [...state.data, action.message],
      });
    case SET_MESSAGES:
      return messages;
    default:
      return state;
  }
}
