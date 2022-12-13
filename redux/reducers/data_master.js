import {
  GET_DATA_MASTER_BY_ID,
  PUT_DATA_MASTER,
  GET_ALL_DATA_MASTER_DETAIL,
  GET_ALL_DATA_MASTER_HEADER,
  GET_ALL_DATA_MASTER_GROUPED,
} from "redux/types";

const initialState = {
  dataGrouped: [],
  currentPageGrouped: 1,
  pageSizeGrouped: 5,
  totalPageGrouped: 0,
  dataHeader: [],
  currentPageHeader: 1,
  pageSizeHeader: 5,
  totalPageHeader: 0,
  dataDetail: [],
  currentPageDetail: 1,
  pageSizeDetail: 5,
  totalPageDetail: 0,
};

const dataMasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_MASTER_GROUPED:
      return {
        ...state,
        dataHeader: action.payload.data,
        currentPageHeader: action.payload.currentPage,
        pageSizeHeader: action.payload.pageSize,
        totalPageHeader: action.payload.totalPage,
        dataDetail: [],
        currentPageDetail: 1,
        pageSizeDetail: 5,
        totalPageDetail: 0,
      };
    case GET_ALL_DATA_MASTER_HEADER:
      return {
        ...state,
        dataHeader: action.payload.data,
        currentPageHeader: action.payload.currentPage,
        pageSizeHeader: action.payload.pageSize,
        totalPageHeader: action.payload.totalPage,
      };
    case GET_ALL_DATA_MASTER_DETAIL:
      return {
        ...state,
        dataDetail: action.payload.data,
        currentPageDetail: action.payload.currentPage,
        pageSizeDetail: action.payload.pageSize,
        totalPageDetail: action.payload.totalPage,
      };
    case GET_DATA_MASTER_BY_ID:
      return action.payload;
    case PUT_DATA_MASTER:
      return action.payload;
    default:
      return state;
  }
};

export default dataMasterReducer;
