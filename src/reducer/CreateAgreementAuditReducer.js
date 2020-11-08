import {
  EXPORT_DATA,
} from '../actions/CreateAgreementAction.js';

const initialState = {
  statusList: [],
  auditRequest: [],
  excelFile: "",
  formdata:[]
};


export default function CreateAgreementAuditReducer(state = initialState, action) {
  switch (action.type) {
   
    case EXPORT_DATA: {
      return {
        ...state, formdata: action.payload
      };
      break;
    }

    default: {
      return state;
    }
  }
}