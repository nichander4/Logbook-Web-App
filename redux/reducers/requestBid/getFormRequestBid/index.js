import { ConstRequestBid } from "redux/constants/requestBid/getFormRequestBid";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const listRequestBid = (state = initialState, action) => {
  switch (action.type) {
    case ConstRequestBid.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstRequestBid.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstRequestBid.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstRequestBid.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstRequestBid.CLEAR:
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

export default listRequestBid;
