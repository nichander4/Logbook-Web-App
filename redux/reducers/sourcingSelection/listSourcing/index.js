import { ConstListSourcing } from "redux/constants/sourcingSelection/listSourcing";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const listSourcing = (state = initialState, action) => {
  switch (action.type) {
    case ConstListSourcing.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstListSourcing.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstListSourcing.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstListSourcing.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstListSourcing.CLEAR:
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

export default listSourcing;
