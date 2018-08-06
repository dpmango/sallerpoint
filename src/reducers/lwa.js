import * as types from '../store/ActionTypes';

const initialState = {
  resp: {
    code: null,
    scope: null
  },
  message: null
}

const lwa = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_LWA_AUTH:
      return {
        ...state,
        resp: action.payload
      }

    default:
      return state;
  }
}

export default lwa;
