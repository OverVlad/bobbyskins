import { support } from './initialState';
import { TOGGLE_FAQBOX } from '../constants/supportConstants';

function faqBox(state = {}, action) {
  switch(action.type) {
    case TOGGLE_FAQBOX:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(state, {}, { opened: !state.opened });
    default:
      return state;
  }
}

function supportReducer(state = support, action) {
  switch(action.type) {
    case TOGGLE_FAQBOX:
      return state.map(box => faqBox(box, action));
    default:
      return state;
  }
}

export default supportReducer;
