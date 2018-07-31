import * as types from '../store/ActionTypes';

const initialState = {
  menuOpened: false,
  stateClass: ''
}

const header = (state = initialState, action) => {
  switch (action.type) {

    case types.OPEN_MENU:
      return {
        ...state,
        menuOpened: true
      }

    case types.CLOSE_MENU:
      return {
        ...state,
        menuOpened: false
      }

    case types.SET_HEADER_CLASS:
      return {
        ...state,
        stateClass: action.payload
      }

    default:
      return state;
  }
}

export default header;
