import * as types from '../store/ActionTypes';

export const setHeaderClass = (data) => ({
  type: types.SET_HEADER_CLASS,
  payload: data
})

export const setSignupStep = (data) => ({
  type: types.SET_SIGNUP_STEP,
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
