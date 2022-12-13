import {
  GET_ALL_MASTER_MAT_FUNCTION,
  GET_MASTER_MAT_FUNCTION_BY_ID,
  POST_MASTER_MAT_FUNCTION,
  PUT_MASTER_MAT_FUNCTION,
  DELETE_MASTER_MAT_FUNCTION,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MASTER_MAT_FUNCTION:
       return {
          ...state,
          data: action.payload.data,
          currentPage: action.payload.currentPage,
          pageSize: action.payload.pageSize,
          totalPage: action.payload.totalPage,
        };
      case GET_MASTER_MAT_FUNCTION_BY_ID:
        return action.payload;
      case POST_MASTER_MAT_FUNCTION:
        return action.payload;
      case PUT_MASTER_MAT_FUNCTION:
        return action.payload;
      case DELETE_MASTER_MAT_FUNCTION:
        return action.payload;
      default: return state
    }
  }
  
  export default reducer