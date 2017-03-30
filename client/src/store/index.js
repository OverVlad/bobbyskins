import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';

const logger = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {

  return createStoreWithMiddleware(
    rootReducer,
    initialState
  );
}
