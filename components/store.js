import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer  } from 'redux-devtools-extension';

import rootReducer from './contador/reducers';

const initStore = (initialState) => {
  return createStore(rootReducer, initialState, devToolsEnhancer(
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
  ))

}

export { initStore };