import {
  GET_ALL_MASTER_SUPPLIER_DOCUMENT,
  GET_MASTER_SUPPLIER_DOCUMENT_BY_ID,
  DELETE_MASTER_SUPPLIER_DOCUMENT,
  POST_MASTER_SUPPLIER_DOCUMENT,
  PUT_MASTER_SUPPLIER_DOCUMENT,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const documentSupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_SUPPLIER_DOCUMENT:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_SUPPLIER_DOCUMENT_BY_ID:
      return action.payload;
    case DELETE_MASTER_SUPPLIER_DOCUMENT:
      return action.payload;
    case POST_MASTER_SUPPLIER_DOCUMENT:
      return action.payload;
    case PUT_MASTER_SUPPLIER_DOCUMENT:
      return action.payload;
    default:
      return state;
  }
};

export default documentSupplierReducer;
