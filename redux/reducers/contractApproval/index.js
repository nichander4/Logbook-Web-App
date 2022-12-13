import { ConstContractApproval } from "redux/constants/contractApproval";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const contractApproval = (state = initialState, action) => {
  switch (action.type) {
    case ConstContractApproval.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstContractApproval.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstContractApproval.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstContractApproval.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstContractApproval.CLEAR:
      return {
        filter: null,
        response: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default contractApproval;
