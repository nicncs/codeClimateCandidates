import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer, { INITIAL_STATE as initialState } from './root-reducer';

const isProduction = process.env.NODE_ENV === 'production';
const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

// Deactivate these development tools in production.
const middlewares = [thunk];
const extension = !isProduction && !!reduxDevtoolsExtension ? reduxDevtoolsExtension() : f => f;

if (!isProduction) {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    extension
  )
);

export default store;
