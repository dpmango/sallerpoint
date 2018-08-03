import * as types from '../store/ActionTypes';

export const setSignupStep = (data) => ({
  type: types.SET_SIGNUP_STEP,
  payload: data
})

export const setSignupAuthStep = (data) => ({
  type: types.SET_SIGNUP_AUTH_STEP,
  payload: data
})

export const setSignupEmail = (data) => ({
  type: types.SET_SIGNUP_EMAIL,
  payload: data
})
export const setSignupId = (data) => ({
  type: types.SET_SIGNUP_ID,	
  payload: data
})

export const setSignupFields = (data) => ({
  type: types.SET_SIGNUP_FIELDS,
  payload: data
})
