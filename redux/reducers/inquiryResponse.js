import {
  GET_ALL_INQUIRY_RESPONSE,
  GET_INQUIRY_RESPONSE_BY_ID,
  POST_INQUIRY_RESPONSE,
  PUT_INQUIRY_RESPONSE,
  DELETE_INQUIRY_RESPONSE,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const inquiryResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INQUIRY_RESPONSE:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_INQUIRY_RESPONSE_BY_ID:
      return action.payload;
    case POST_INQUIRY_RESPONSE:
      return action.payload;
    case PUT_INQUIRY_RESPONSE:
      return action.payload;
    case DELETE_INQUIRY_RESPONSE:
      return action.payload;
    default:
      return state;
  }
};

export default inquiryResponseReducer;
