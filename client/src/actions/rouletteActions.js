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
 * FETCH NUMBER FOR ROUND
 * */

 export const startRoll = function (roll) {
   return {
     type: actions.START_ROLL,
     roll
   }
 }

 export const joinRoulette = function (round) {
   return {
     type: actions.JOIN_ROULETTE,
     round
   }
 }

 export const startRound = function (round) {
   return {
     type: actions.START_ROUND,
     round
   };
 };

 export const finishRoll = function () {
   return {
     type: actions.FINISH_ROLL
   }
 }

 export const refreshTotalBets = (totalBets) => {
  return {
    type: actions.REFRESH_TOTAL_BETS,
    totalBets
  };
 }

 /*
  * HOSTIRY
  * */
  export const refreshHistory = function (historyRolls) {
    return {
      type: actions.REFRESH_HISTORY,
      historyRolls
    }
  }

  export const addToHistory = function (number) {
    return {
      type: actions.ADD_TO_HISTORY,
      number
    };
  }

  export const fetchTotalBets = function (totalBets) {
    return {
      type: actions.FETCH_TOTAL_BETS,
      totalBets
    }
  }

  export const setWiners = (winTypes) => {
    return {
      type: actions.SET_WINNERS,
      winTypes
    };
  }

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
