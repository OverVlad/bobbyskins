import axios from 'axios';
import * as actions from '../constants/profileConstants';
import formatDate from '../utils/formatDate';
import getPokerCombination from '../utils/getPokerCombination';

function requestCommonInfo(user) {
  return {
    type: actions.REQUEST_COMMON_INFO,
    user
  }
}

function receiveCommonInfo(user, res) {
  return {
    type: actions.RECEIVE_COMMON_INFO,
    user,
    commonInfo: res.data
  }
}

function requestReferals(user) {
  return {
    type: actions.REQUEST_REFERALS,
    user
  }
}

function receiveReferals(user, res) {
  return {
    type: actions.RECEIVE_REFERALS,
    user,
    referals: res.data
  }
}

function requestTradeHistory(user) {
  return {
    type: actions.REQUEST_TRADE_HISTORY,
    user
  }
}

function receiveTradeHistory(user, res) {
  return {
    type: actions.RECEIVE_TRADE_HISTORY,
    user,
    tradeHistory: res.data
  }
}

export const fetchCommonInfo = (user) => (dispatch) => {
  dispatch(requestCommonInfo(user));

  return axios.get(`/api/profile/${user.id}/common-info`)
    .then(res => dispatch(receiveCommonInfo(user, res)))
}

export const fetchReferals = (user) => (dispatch) => {
  dispatch(requestReferals(user));

  return axios.get(`/api/profile/${user.id}/referals`)
    .then(res => dispatch(receiveReferals(user, res)))
}

export const fetchTradeHistory = (user) => (dispatch) => {
  dispatch(requestTradeHistory(user));

  return axios.get(`/api/profile/${user.id}/trade-history`)
    .then(res => dispatch(receiveTradeHistory(user, res)))
}

export const fetchRouletteStats = (user) => (dispatch) => {
  dispatch({
    type: actions.FETCH_ROULETTE_STATS_REQUEST,
    user
  });

  return axios.get(`/api/profile/${user.id}/roulette-stats`).then(
    res => {
      const rouletteStats = res.data.bets.map((i) => ( {...i, createdAt: formatDate(i.createdAt)} ));
      dispatch({
        type: actions.FETCH_ROULETTE_STATS_SUCCESS,
        user,
        rouletteStats
      });
    }, error => {
      dispatch({
        type: actions.FETCH_ROULETTE_STATS_FAILURE,
        user,
        message: error.message || 'Something went wrong.'
      });
    }
  );
}

export const fetchPokerStats = (user) => (dispatch) => {
  dispatch({
    type: actions.FETCH_POKER_STATS_REQUEST,
    user
  });

  return axios.get(`/api/profile/${user.id}/poker-stats`).then(
    res => {
      const pokerStats = res.data.pokerBets.map((i) => {
        return {
          ...i,
          createdAt: formatDate(i.createdAt),
          combination: getPokerCombination(i.combination)
        }
      });

      dispatch({
        type: actions.FETCH_POKER_STATS_SUCCESS,
        user,
        pokerStats
      });
    }, error => {
      dispatch({
        type: actions.FETCH_POKER_STATS_FAILURE,
        user,
        message: error.message || 'Something went wrong.'
      });
    }
  );
}
