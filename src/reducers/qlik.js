import * as types from '../store/ActionTypes';

const initialState = {
  connected: false,
  params: {
    
  }
}

const qlik = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_QLIK_CONNECTION:
      return {
        ...state,
        connected: action.payload
      }
    case types.SET_QLIK_PARAMS:
      return {
        ...state,
        params: action.payload
      }

    default:
      return state;
  }
}

export default qlik;
