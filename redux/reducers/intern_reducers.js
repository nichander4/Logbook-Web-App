import {
    GET_ALL_INTERN,
    GET_INTERN_BY_ID,
    POST_INTERN,
    PUT_INTERN,
    DELETE_INTERN,
  } from "redux/types";
  
  const initialState = {
    data: [],
    currentPage: 0,
    pageSize: 0,
    totalPage: 0,
    }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_INTERN:
      return {
         ...state,
         data: action.payload.data,
         currentPage: action.payload.currentPage,
         pageSize: action.payload.pageSize,
         totalPage: action.payload.totalPage,
       };
     case GET_INTERN_BY_ID:
       return action.payload;
     case POST_INTERN:
       return action.payload;
     case PUT_INTERN:
       return action.payload;
     case DELETE_INTERN:
       return action.payload;
      default: return state
    }
  }
  
  export default reducer