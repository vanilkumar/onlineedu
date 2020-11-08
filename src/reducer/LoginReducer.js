import {
  PROJECT_DATA,LOGIN_DATA,CREATE_ACCOUNT
} from '../actions/LoginAction.js';

const initialState = {
  projectdata:[],
  login:'',
  createAcc:{}
};


export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
   
    case PROJECT_DATA: {
      return {
        ...state, projectdata: action.payload
      };
      break;
    }
    case LOGIN_DATA: {
      console.info('reducers',)
      return {
        ...state, login: action.payload
      };
      break;
    }
    case CREATE_ACCOUNT: {
      console.info('reducers',)
      return {
        ...state, createAcc: action.payload
      };
      break;
    }

    default: {
      return state;
    }
  }
}