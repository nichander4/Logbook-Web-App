import { ConstBidComparison } from "redux/constants/bidComparison";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const bidComparison = (state = initialState, action) => {
  switch (action.type) {
    case ConstBidComparison.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstBidComparison.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstBidComparison.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstBidComparison.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstBidComparison.CLEAR:
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

export default bidComparison;
