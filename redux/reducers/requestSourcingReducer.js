import {
    GET_ALL_REQUEST_SOURCING,
    GET_LAST_REQUEST_SOURCING,
    GET_REQUEST_SOURCING,
    POST_REQUEST_SOURCING,
    PUT_REQUEST_SOURCING,
    DELETE_REQUEST_SOURCING,
    SUBMIT_REQUEST_SOURCING,
    APPROVE_REQUEST_SOURCING,
    REJECT_REQUEST_SOURCING,
    REVISE_REQUEST_SOURCING,
    ASSIGN_REQUEST_SOURCING
  } from "redux/types";
  
  const initialState = {
    data: [],
    currentPage: 0,
    pageSize: 0,
    totalPage: 0,
    }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_REQUEST_SOURCING:
      return {
         ...state,
         data: action.payload.data,
         currentPage: action.payload.currentPage,
         pageSize: action.payload.pageSize,
         totalPage: action.payload.totalPage,
       };
      case GET_LAST_REQUEST_SOURCING:
      return {
         ...state,
         data: action.payload.data,
         currentPage: action.payload.currentPage,
         pageSize: action.payload.pageSize,
         totalPage: action.payload.totalPage,
       };
     case GET_REQUEST_SOURCING:
       return action.payload;
     case POST_REQUEST_SOURCING:
       return action.payload;
     case PUT_REQUEST_SOURCING:
       return action.payload;
     case DELETE_REQUEST_SOURCING:
       return action.payload;
     case SUBMIT_REQUEST_SOURCING:
       return action.payload;
     case APPROVE_REQUEST_SOURCING:
       return action.payload;
     case REJECT_REQUEST_SOURCING:
       return action.payload;
     case REVISE_REQUEST_SOURCING:
       return action.payload;
     case ASSIGN_REQUEST_SOURCING:
       return action.payload;
      default: return state
    }
  }
  
  export default reducer