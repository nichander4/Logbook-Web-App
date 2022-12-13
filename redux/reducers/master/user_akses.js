import {
  POST_MASTER_USER_AKSES,
  PUT_MASTER_USER_AKSES,
  DELETE_MASTER_USER_AKSES,
  GET_ALL_MASTER_USER_AKSES,
  GET_MASTER_USER_AKSES_BY_ID,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const masterUserAksesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_USER_AKSES:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_USER_AKSES_BY_ID:
      return action.payload;
    case POST_MASTER_USER_AKSES:
      return action.payload;
    case PUT_MASTER_USER_AKSES:
      return action.payload;
    case DELETE_MASTER_USER_AKSES:
      return action.payload;
    default:
      return state;
  }
};

export default masterUserAksesReducer;
