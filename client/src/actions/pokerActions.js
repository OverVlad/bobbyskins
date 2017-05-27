import axios from 'axios';
import * as constants from '../constants/pokerConstants';

export const rollCards = (cards) => (
  {
    type: constants.ROLL_CARDS,
    cards
  }
);

export const getCombination = () => (dispatch) => {
  axios.get('/api/poker')
    .then((res) => {
      dispatch(rollCards(res.data));
    });
}
