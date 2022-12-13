import { ConstListSC } from "../../../constants/suggestionContract/listSC";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const listSC = (state = initialState, action) => {
  switch (action.type) {
    case ConstListSC.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstListSC.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstListSC.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstListSC.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstListSC.CLEAR:
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

export default listSC;
