import {
    GET_ALL_MASTER_JOB_LIST,
    GET_MASTER_JOB_LIST_BY_ID,
    POST_MASTER_JOB_LIST,
    PUT_MASTER_JOB_LIST,
    DELETE_MASTER_JOB_LIST,
  } from "redux/types";
  
  const initialState = {
    data: [],
    currentPage: 0,
    pageSize: 0,
    totalPage: 0,
  };
  
  const MasterJobListReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MASTER_JOB_LIST:
        return {
          ...state,
          data: action.payload.data,
          currentPage: action.payload.currentPage,
          pageSize: action.payload.pageSize,
          totalPage: action.payload.totalPage,
        };
      case GET_MASTER_JOB_LIST_BY_ID:
        return action.payload;
      case POST_MASTER_JOB_LIST:
        return action.payload;
      case PUT_MASTER_JOB_LIST:
        return action.payload;
      case DELETE_MASTER_JOB_LIST:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default MasterJobListReducer;
  