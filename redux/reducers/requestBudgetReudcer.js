import {
    GET_ALL_REQUEST_BUDGET,
    GET_REQUEST_BUDGET_BY_ID,
    PUT_REQUEST_BUDGET,
    DELETE_REQUEST_BUDGET,
  } from "redux/types";
  
  const initialState = {
    data: [],
    currentPage: 0,
    pageSize: 0,
    totalPage: 0,
    }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_REQUEST_BUDGET:
      return {
         ...state,
         data: action.payload.data,
         currentPage: action.payload.currentPage,
         pageSize: action.payload.pageSize,
         totalPage: action.payload.totalPage,
       };
     case GET_REQUEST_BUDGET_BY_ID:
       return action.payload;
     case PUT_REQUEST_BUDGET:
       return action.payload;
     case DELETE_REQUEST_BUDGET:
       return action.payload;
      default: return state
    }
  }
  
  export default reducer