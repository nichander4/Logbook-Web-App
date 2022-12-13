import {
  GET_ALL_MASTER_CHANGE_CATEGORY,
  GET_MASTER_CHANGE_CATEGORY_BY_ID,
  POST_MASTER_CHANGE_CATEGORY,
  PUT_MASTER_CHANGE_CATEGORY,
  DELETE_MASTER_CHANGE_CATEGORY,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_CHANGE_CATEGORY:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_CHANGE_CATEGORY_BY_ID:
      return {
        ...state,
        data: action.payload,
      };
    case POST_MASTER_CHANGE_CATEGORY:
      return action.payload;
    case PUT_MASTER_CHANGE_CATEGORY:
      return action.payload;
    case DELETE_MASTER_CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
