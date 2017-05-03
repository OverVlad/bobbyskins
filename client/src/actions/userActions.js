import * as constants from '../constants/userConstants';

export const updateUser = function (userData) {
  return {
    type: constants.UPDATE_USER,
    ...userData
  }
};

export const refreshBalance = (balance) => {
  return {
    type: constants.REFRESH_BALANCE,
    balance
  };
}

export const killUser = function () {
  return {
    type: constants.KILL_USER
  };
};
