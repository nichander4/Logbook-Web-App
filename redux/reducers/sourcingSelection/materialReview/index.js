import { ConstMaterialReview } from "redux/constants/sourcingSelection/materialReview";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const materialReview = (state = initialState, action) => {
  switch (action.type) {
    case ConstMaterialReview.LOADING:
      return {
        filter: state.filter,
        response: state.response,
        loading: true,
        error: null,
      };
    case ConstMaterialReview.SET_DATA:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstMaterialReview.SET_FILTER:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    case ConstMaterialReview.FAILED:
      return {
        filter: state.filter,
        response: state.response,
        loading: false,
        error: action.payload,
      };
    case ConstMaterialReview.CLEAR:
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

export default materialReview;
