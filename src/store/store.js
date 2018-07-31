import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import { loadState, saveState } from './localStorage';

const initialState = loadState();

const createStoreWithMiddleware = compose(
  applyMiddleware()
)(createStore);

const store = createStoreWithMiddleware(reducers, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
