import { GET_ALL_TRANSFER_DATA, EXPORT_EXCEL_TRANSFER_DATA } from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const transferData = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSFER_DATA:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case EXPORT_EXCEL_TRANSFER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default transferData;
