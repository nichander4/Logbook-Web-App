import {
  GET_ALL_INQUIRY,
  GET_INQUIRY_BY_ID,
  POST_INQUIRY,
  PUT_INQUIRY,
  DELETE_INQUIRY,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const inquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INQUIRY:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };

    case GET_INQUIRY_BY_ID:
      return action.payload;

    case POST_INQUIRY:
      return action.payload;

    case PUT_INQUIRY:
      return action.payload;

    case DELETE_INQUIRY:
      return action.payload;

    default:
      return state;
  }
};

export default inquiryReducer;
