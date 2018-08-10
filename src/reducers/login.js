import * as types from '../store/ActionTypes';

export const initialState = {
  authToken: null
}

const login = (state = initialState, action) => {
  switch (action.type) {

    case types.LOG_IN:
      return {
        ...state,
        authToken: action.payload,
      }

    case types.LOG_OUT:
      return {
        initialState
      }

    default:
      return state;
  }
}

export default login;
