import {
  GET_ALL_MASTER_FUNCTION_SUPPLIER,
  GET_MASTER_FUNCTION_SUPPLIER_BY_ID,
  POST_MASTER_FUNCTION_SUPPLIER,
  PUT_MASTER_FUNCTION_SUPPLIER,
  DELETE_MASTER_FUNCTION_SUPPLIER,
  GET_ALL_MASTER_FUNCTION_SUPPLIER_WITHOUT_PAGINATION,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const MasterFunctionSupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_FUNCTION_SUPPLIER:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_ALL_MASTER_FUNCTION_SUPPLIER_WITHOUT_PAGINATION:
      let tempFunction = [];

      action.payload.map((data) => {
        tempFunction.push({
          value: data.name,
          label: data.name,
        });
      });

      return {
        ...state,
        data: tempFunction,
      };
    case GET_MASTER_FUNCTION_SUPPLIER_BY_ID:
      return action.payload;
    case POST_MASTER_FUNCTION_SUPPLIER:
      return action.payload;
    case PUT_MASTER_FUNCTION_SUPPLIER:
      return action.payload;
    case DELETE_MASTER_FUNCTION_SUPPLIER:
      return action.payload;
    default:
      return state;
  }
};

export default MasterFunctionSupplierReducer;
