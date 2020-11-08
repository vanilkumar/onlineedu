

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import LoginData from './reducer/CreateAgreementAuditReducer';
import ProjectList from './reducer/LoginReducer';

/*
  Store
  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/
const rootReducer = combineReducers({
  LoginData,ProjectList
});



const store = createStore(rootReducer, applyMiddleware(thunk));

// we export history because we need it in `reduxstagram.js` to feed into <Router>
// export const history = syncHistoryWithStore(browserHistory, store);



export default store;