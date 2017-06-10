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

function requestRouletteStats(user) {
  return {
    type: actions.REQUEST_ROULETTE_STATS,
    user
  }
}

function receiveRouletteStats(user, res) {
  return {
    type: actions.RECEIVE_ROULETTE_STATS,
    user,
    rouletteStats: res
  }
}

function requestPokerStats(user) {
  return {
    type: actions.REQUEST_POKER_STATS,
    user
  }
}

function receivePokerStats(user, res) {
  return {
    type: actions.RECEIVE_POKER_STATS,
    user,
    pokerStats: res
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
  dispatch(requestRouletteStats(user));

  return axios.get(`/api/profile/${user.id}/roulette-stats`)
    .then(res => {
      const rouletteStats = res.data.bets.map((i) => ( {...i, createdAt: formatDate(i.createdAt)} ));
      dispatch(receiveRouletteStats(user, rouletteStats));
    })
}

export const fetchPokerStats = (user) => (dispatch) => {
  dispatch(requestPokerStats(user));

  return axios.get(`/api/profile/${user.id}/poker-stats`)
    .then(res => {
      const pokerStats = res.data.pokerBets.map((i) => {
        return {
          ...i,
          createdAt: formatDate(i.createdAt),
          combination: getPokerCombination(i.combination)
        }
      });

      dispatch(receivePokerStats(user, pokerStats));
    })
}
