import {
  GET_ALL_SAMPLE_REQUEST,
  GET_SAMPLE_REQUEST_BY_ID,
  POST_SAMPLE_REQUEST,
  PUT_SAMPLE_REQUEST,
  DELETE_SAMPLE_REQUEST,
  EXPORT_SAMPLE_REQUEST,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SAMPLE_REQUEST:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_SAMPLE_REQUEST_BY_ID:
      return action.payload;
    case POST_SAMPLE_REQUEST:
      return action.payload;
    case PUT_SAMPLE_REQUEST:
      return action.payload;
    case DELETE_SAMPLE_REQUEST:
      return action.payload;
    case EXPORT_SAMPLE_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
