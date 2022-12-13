import {
  GENERATE_SUGGESTION_PROJECT,
  GET_ALL_SUGGESTION_PROJECT,
  GET_SUGGESTION_PROJECT_BY_ID,
  PUT_SUGGESTION_PROJECT,
  DELETE_SUGGESTION_PROJECT,
  DOWNLOAD_SUGGESTION_PROJECT,
  EXPORT_SUGGESTION_PROJECT,
  SUBMIT_SUGGESTION_PROJECT,
  REVISE_SUGGESTION_PROJECT,
  APPROVE_SUGGESTION_PROJECT,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUGGESTION_PROJECT:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_SUGGESTION_PROJECT_BY_ID:
      return {
        ...state,
        data: action.payload,
      };
    case GENERATE_SUGGESTION_PROJECT:
      return action.payload;
    case DOWNLOAD_SUGGESTION_PROJECT:
      return action.payload;
    case EXPORT_SUGGESTION_PROJECT:
      return action.payload;
    case PUT_SUGGESTION_PROJECT:
      return action.payload;
    case DELETE_SUGGESTION_PROJECT:
      return action.payload;
    case SUBMIT_SUGGESTION_PROJECT:
      return action.payload;
    case REVISE_SUGGESTION_PROJECT:
      return action.payload;
    case APPROVE_SUGGESTION_PROJECT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
