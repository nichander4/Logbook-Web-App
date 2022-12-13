import {
  GET_ALL_MASTER_SITE_PRINT_OUT,
  GET_MASTER_SITE_PRINT_OUT_BY_ID,
  POST_MASTER_SITE_PRINT_OUT,
  PUT_MASTER_SITE_PRINT_OUT,
  DELETE_MASTER_SITE_PRINT_OUT,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const masterSitePrintOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_SITE_PRINT_OUT:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_SITE_PRINT_OUT_BY_ID:
      return action.payload;
    case POST_MASTER_SITE_PRINT_OUT:
      return action.payload;
    case PUT_MASTER_SITE_PRINT_OUT:
      return action.payload;
    case DELETE_MASTER_SITE_PRINT_OUT:
      return action.payload;
    default:
      return state;
  }
};

export default masterSitePrintOutReducer;
