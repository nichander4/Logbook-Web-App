import { ConstListFC } from "redux/constants/forecastCalculation";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const listFC = (state = initialState, action) => {
  switch (action.type) {
    case ConstListFC.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstListFC.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstListFC.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstListFC.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstListFC.CLEAR:
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

export default listFC;
