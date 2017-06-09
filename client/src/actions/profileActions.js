import axios from 'axios';
import * as actions from '../constants/profileConstants';

function requestCommonInfo(user) {
  return {
    type: actions.REQUEST_COMMON_INFO,
    user
  }
}

function receiveCommonInfo(user, json) {
  return {
    type: actions.RECEIVE_COMMON_INFO,
    user,
    commonInfo: json.data
  }
}

function requestReferals(user) {
  return {
    type: actions.REQUEST_REFERALS,
    user
  }
}

function receiveReferals(user, json) {
  return {
    type: actions.RECEIVE_REFERALS,
    user,
    referals: json.data
  }
}

function requestTradeHistory(user) {
  return {
    type: actions.REQUEST_TRADE_HISTORY,
    user
  }
}

function receiveTradeHistory(user, json) {
  return {
    type: actions.RECEIVE_TRADE_HISTORY,
    user,
    tradeHistory: json.data
  }
}

function requestRouletteStats(user) {
  return {
    type: actions.REQUEST_ROULETTE_STATS,
    user
  }
}

function receiveRouletteStats(user, json) {
  return {
    type: actions.RECEIVE_ROULETTE_STATS,
    user,
    rouletteStats: json.data
  }
}

function requestPokerStats(user) {
  return {
    type: actions.REQUEST_POKER_STATS,
    user
  }
}

function receivePokerStats(user, json) {
  return {
    type: actions.RECEIVE_POKER_STATS,
    user,
    pokerStats: json.data
  }
}

export const fetchCommonInfo = (user) => (dispatch) => {
  dispatch(requestCommonInfo(user))

  return axios.get(`/api/profile/${user.id}/common-info`)
    .then(res => res.json())
    .then(json => dispatch(receiveCommonInfo(user, json)))
}

export const fetchReferals = (user) => (dispatch) => {
  dispatch(requestReferals(user))

  return axios.get(`/api/profile/${user.id}/referals`)
    .then(res => res.json())
    .then(json => dispatch(receiveReferals(user, json)))
}

export const fetchTradeHistory = (user) => (dispatch) => {
  dispatch(requestTradeHistory(user))

  return axios.get(`/api/profile/${user.id}/trade-history`)
    .then(res => res.json())
    .then(json => dispatch(receiveTradeHistory(user, json)))
}

export const fetchRouletteStats = (user) => (dispatch) => {
  dispatch(requestRouletteStats(user))

  return axios.get(`/api/profile/${user.id}/roulette-stats`)
    .then(res => res.json())
    .then(json => dispatch(receiveRouletteStats(user, json)))
}

export const fetchPokerStats = (user) => (dispatch) => {
  dispatch(requestPokerStats(user))

  return axios.get(`/api/profile/${user.id}/poker-stats`)
    .then(res => res.json())
    .then(json => dispatch(receivePokerStats(user, json)))
}
