import * as types from '../store/ActionTypes';

export const setHeaderClass = (data) => ({
  type: types.SET_HEADER_CLASS,
  payload: data
})

export const setSignupStep = (data) => ({
  type: types.SET_SIGNUP_STEP,
  payload: data
})
