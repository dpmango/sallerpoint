import * as types from '../store/ActionTypes';

export const initialState = {
  signupStep: 1,
  signupAuthStep: 1,
  signupEmail: undefined,
  signupId: undefined,
  fields: {
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    phone: '',
    password: '',
    marketplace_region: 1,
    seller_id: '',
    mws_auth: '',
    authenticated_marketplace: null,
    marketplace_domains: [], //id's of authenticated marketplaces thats been choosen
    connected_marketplaces: []
  }
}

const signup = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_SIGNUP_STEP:
      return {
        ...state,
        signupStep: action.payload,
      }
    case types.SET_SIGNUP_AUTH_STEP:
      return {
        ...state,
        signupAuthStep: action.payload,
      }
    case types.SET_SIGNUP_EMAIL:
      return {
        ...state,
        signupEmail: action.payload,
      }
    case types.SET_SIGNUP_ID:
      return {
        ...state,
        signupId: action.payload,
      }
    case types.SET_SIGNUP_FIELDS:
      return {
        ...state,
        fields: action.payload
      }
    default:
      return state;
  }
}

export default signup;
