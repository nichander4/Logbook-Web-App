import {
  GET_ALL_CLOSE_PROJECT_LIST,
  GET_CLOSE_PROJECT_LIST_BY_ID,
  GET_PLM_DATA_CC,
  GET_PLM_DATA_JIP,
  POST_CLOSE_PROJECT_LIST,
  PUT_CLOSE_PROJECT_LIST,
  DELETE_CLOSE_PROJECT_LIST,
  EXPORT_CLOSE_PROJECT_LIST,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CLOSE_PROJECT_LIST:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_CLOSE_PROJECT_LIST_BY_ID:
      return action.payload;
    case GET_PLM_DATA_CC:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_PLM_DATA_JIP:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case POST_CLOSE_PROJECT_LIST:
      return action.payload;
    case PUT_CLOSE_PROJECT_LIST:
      return action.payload;
    case DELETE_CLOSE_PROJECT_LIST:
      return action.payload;
    case EXPORT_CLOSE_PROJECT_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
