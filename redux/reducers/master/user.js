import {
  DELETE_MASTER_USER,
  GET_ALL_MASTER_USER,
  GET_MASTER_USER_BY_ID,
  GET_MASTER_USER_BY_USERNAME,
  POST_MASTER_USER,
  PUT_MASTER_USER,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const masterUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_USER:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_USER_BY_ID:
      return action.payload;
    case GET_MASTER_USER_BY_USERNAME:
      return action.payload;
    case POST_MASTER_USER:
      return action.payload;
    case PUT_MASTER_USER:
      return action.payload;
    case DELETE_MASTER_USER:
      return action.payload;
    default:
      return state;
  }
};

export default masterUserReducer;
