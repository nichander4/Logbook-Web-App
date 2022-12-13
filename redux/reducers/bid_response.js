import {
  DELETE_BID_RESPONSE,
  DELETE_MASTER_USER,
  GET_ALL_BID_RESPONSE,
  GET_ALL_MASTER_USER,
  GET_BID_RESPONSE_BY_ID,
  GET_MASTER_USER_BY_ID,
  POST_BID_RESPONSE,
  POST_MASTER_USER,
  PUT_BID_RESPONSE,
  PUT_MASTER_USER,
  PUT_APPROVAL_BID_RESPONSE,
  POST_COMMENT,
  POST_NOTIFICATION,
  DELETE_FILE_BID_RESPONSE_BY_ID,
  POST_EXPORT_EXCEL,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const bidResponse = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BID_RESPONSE:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_BID_RESPONSE_BY_ID:
      return action.payload;
    case POST_BID_RESPONSE:
      return action.payload;
    case PUT_BID_RESPONSE:
      return action.payload;
    case DELETE_BID_RESPONSE:
      return action.payload;
    case PUT_APPROVAL_BID_RESPONSE:
      return action.payload;
    case POST_COMMENT:
      return action.payload;
    case POST_NOTIFICATION:
      return action.payload;
    case DELETE_FILE_BID_RESPONSE_BY_ID:
      return action.payload;
    case POST_EXPORT_EXCEL:
      return action.payload;
    default:
      return state;
  }
};

export default bidResponse;
