import { ConstDetailContractApproval } from "redux/constants/contractApproval";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const detailContralApproval = (state = initialState, action) => {
  switch (action.type) {
    case ConstDetailContractApproval.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstDetailContractApproval.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstDetailContractApproval.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstDetailContractApproval.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstDetailContractApproval.CLEAR:
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

export default detailContralApproval;
