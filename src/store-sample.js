
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import CreateAgreementAuditReducer from 'app_reducers/CreateAgreementAuditReducer';

function networkReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_REQUEST_CATCH': {
      return {
        ...state, netWorkError: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  CreateAgreementAuditReducer
});

/*
  Store
  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/



const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, applyMiddleware(thunk));

// we export history because we need it in `reduxstagram.js` to feed into <Router>
// export const history = syncHistoryWithStore(browserHistory, store);



export default store;
