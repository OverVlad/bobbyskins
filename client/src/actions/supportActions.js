import { TOGGLE_FAQBOX } from '../constants/supportConstants';

export const toggleFaqBox = function (id) {
  return {
    type: TOGGLE_FAQBOX,
    id
  }
};
