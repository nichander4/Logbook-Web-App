import {
  GET_ALL_MASTER_PM_TYPE,
  GET_MASTER_PM_TYPE_BY_ID,
  POST_MASTER_PM_TYPE,
  PUT_MASTER_PM_TYPE,
  DELETE_MASTER_PM_TYPE,
  GET_MATERIAL_TYPE,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const MasterPMTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_PM_TYPE:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_PM_TYPE_BY_ID:
      return action.payload;
    case POST_MASTER_PM_TYPE:
      return action.payload;
    case PUT_MASTER_PM_TYPE:
      return action.payload;
    case DELETE_MASTER_PM_TYPE:
      return action.payload;
    case GET_MATERIAL_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default MasterPMTypeReducer;
