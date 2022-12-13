import {
    GET_ALL_DOCUMENT_CREATOR_LIST,
    GET_DOCUMENT_APPROVAL,
    POST_CHANGE_PIC,
  } from "redux/types";
  
  const initialState = {
    data: [],
    currentPage: 0,
    pageSize: 0,
    totalPage: 0,
    }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_DOCUMENT_CREATOR_LIST:
      return {
         ...state,
         data: action.payload.data,
         currentPage: action.payload.currentPage,
         pageSize: action.payload.pageSize,
         totalPage: action.payload.totalPage,
       };
      case GET_DOCUMENT_APPROVAL:
      return {
         ...state,
         data: action.payload.data,
         currentPage: action.payload.currentPage,
         pageSize: action.payload.pageSize,
         totalPage: action.payload.totalPage,
       };
    
     case POST_CHANGE_PIC:
       return action.payload;

      default: return state
    }
  }
  
  export default reducer