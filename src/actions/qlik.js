import * as types from '../store/ActionTypes';

export const setQlikConnection = (data) => ({
  type: types.SET_QLIK_CONNECTION,
  payload: data
})

export const setQlikParams = (data) => ({
  type: types.SET_QLIK_PARAMS,
  payload: data
})

export const setQlikInstance = (data) => ({
  type: types.SET_QLIK_INSTANCE,
  payload: data
})
