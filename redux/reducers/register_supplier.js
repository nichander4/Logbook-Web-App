import {
  GET_ALL_SUPPLIER,
  POST_REGISTER_SUPPLIER,
  PUT_MY_PROFILE_SUPPLIER,
  GET_MY_PROFILE_SUPPLIER_BY_ID,
  DOWNLOAD_SUPPLIER_LIST,
  DOWNLOAD_CONTACT_PERSON_LIST,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const registersupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUPPLIER:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case POST_REGISTER_SUPPLIER:
      return action.payload;
    case PUT_MY_PROFILE_SUPPLIER:
      return action.payload;
    case GET_MY_PROFILE_SUPPLIER_BY_ID:
      return action.payload;
    case DOWNLOAD_SUPPLIER_LIST:
      return action.payload;
    case DOWNLOAD_CONTACT_PERSON_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default registersupplierReducer;
