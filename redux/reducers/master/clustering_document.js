import {
  DELETE_MASTER_CLUSTERING_DOCUMENT,
  GET_ALL_MASTER_CLUSTERING_DOCUMENT,
  GET_MASTER_CLUSTERING_DOCUMENT_BY_ID,
  POST_MASTER_CLUSTERING_DOCUMENT,
  PUT_MASTER_CLUSTERING_DOCUMENT,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const masterClusteringDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_CLUSTERING_DOCUMENT:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_CLUSTERING_DOCUMENT_BY_ID:
      return {
        ...state,
        data: action.payload
      };
    case POST_MASTER_CLUSTERING_DOCUMENT:
      return action.payload;
    case PUT_MASTER_CLUSTERING_DOCUMENT:
      return action.payload;
    case DELETE_MASTER_CLUSTERING_DOCUMENT:
      return action.payload;
    default:
      return state;
  }
};

export default masterClusteringDocumentReducer;
