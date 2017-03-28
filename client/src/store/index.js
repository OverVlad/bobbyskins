import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

const logger = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {

  return createStoreWithMiddleware(
    rootReducer,
    initialState
  );
}
