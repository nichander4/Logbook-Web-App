import {
  GET_ALL_MASTER_SCORING,
  GET_MASTER_SCORING_BY_ID,
  POST_MASTER_SCORING,
  PUT_MASTER_SCORING,
  DELETE_MASTER_SCORING,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const masterScoringReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_SCORING:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MASTER_SCORING_BY_ID:
      return action.payload;
    case POST_MASTER_SCORING:
      return action.payload;
    case PUT_MASTER_SCORING:
      return action.payload;
    case DELETE_MASTER_SCORING:
      return action.payload;
    default:
      return state;
  }
};

export default masterScoringReducer