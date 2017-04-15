import axios from 'axios';
import * as actions from '../constants/rouletteConstants';

/*
 * FETCH FETCH ROUND
 * */
 const fetchRoundStart = function () {
   return {
     type: actions.FETCH_ROUND_START
   };
 };

 const fetchRoundSuccess = function (round, time) {
   return {
     type: actions.FETCH_ROUND_SUCCESS,
     round
   };
 };

 const fetchRoundError = function (error) {
   return {
     type: actions.FETCH_ROUND_ERROR,
     error
   };
 };

 /*
  * ADD BET
  * */
export const addBet = function (bet) {
  return {
    type: actions.ADD_BET,
    bet
  }
};

/*
 * REQUESTS
 * */
export const fetchRoundRequest = () => (dispatch, getState) => {
  const { user_id } = getState().user;

  dispatch(fetchRoundStart());

  axios.get('/api/roulette/round', user_id)
  .then((round) => {
    dispatch(fetchChatroomMessagesSuccess(round.data.round));
  })
  .catch((error) => {
    dispatch(fetchRoundError(error.message));
  });
}
