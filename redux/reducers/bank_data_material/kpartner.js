import {
  GET_ALL_BANK_DATA_MATERIAL_KPARTNER,
  GET_BANK_DATA_MATERIAL_BY_ID_KPARTNER,
  POST_BANK_DATA_MATERIAL_KPARTNER,
  PUT_BANK_DATA_MATERIAL_KPARTNER,
  DELETE_BANK_DATA_MATERIAL_KPARTNER,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const bankDataMaterialKpartnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BANK_DATA_MATERIAL_KPARTNER:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_BANK_DATA_MATERIAL_BY_ID_KPARTNER:
      return action.payload;
    case POST_BANK_DATA_MATERIAL_KPARTNER:
      return action.payload;
    case PUT_BANK_DATA_MATERIAL_KPARTNER:
      return action.payload;
    case DELETE_BANK_DATA_MATERIAL_KPARTNER:
      return action.payload;
    default:
      return state;
  }
};

export default bankDataMaterialKpartnerReducer;
