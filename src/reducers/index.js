import { combineReducers } from 'redux';

import header from './header';
import signup from './signup';
import login from './login';
import lwa from './lwa';

export default combineReducers({
  header,
  signup,
  login,
  lwa
})
