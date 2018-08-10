import * as types from '../store/ActionTypes';

export const logIn = (data) => ({
  type: types.LOG_IN,
  payload: data
})

export const logOut = (data) => ({
  type: types.LOG_OUT
})
