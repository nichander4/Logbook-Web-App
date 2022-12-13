import {
  GET_ALL_MASTER_MATERIAL_CODE,
  GET_MASTER_MATERIAL_CODE_BY_ID,
  POST_MASTER_MATERIAL_CODE,
  PUT_MASTER_MATERIAL_CODE,
  DELETE_MASTER_MATERIAL_CODE,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const MasterMaterialCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_MATERIAL_CODE:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_MATERIAL_CODE_BY_ID:
      return action.payload;
    case POST_MASTER_MATERIAL_CODE:
      return action.payload;
    case PUT_MASTER_MATERIAL_CODE:
      return action.payload;
    case DELETE_MASTER_MATERIAL_CODE:
      return action.payload;
    default:
      return state;
  }
};

export default MasterMaterialCodeReducer;
