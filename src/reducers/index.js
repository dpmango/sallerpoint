import { combineReducers } from 'redux';

import header from './header';
import signup from './signup';
import login from './login';

export default combineReducers({
  header,
  signup,
  login
})
