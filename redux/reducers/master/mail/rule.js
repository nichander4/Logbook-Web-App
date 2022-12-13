import {
  GET_ALL_MAIL_RULE,
  GET_MAIL_RULE_BY_ID,
  POST_MAIL_RULE,
  PUT_MAIL_RULE,
  DELETE_MAIL_RULE,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const mailRuleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MAIL_RULE:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MAIL_RULE_BY_ID:
      return action.payload;
    case POST_MAIL_RULE:
      return action.payload;
    case PUT_MAIL_RULE:
      return action.payload;
    case DELETE_MAIL_RULE:
      return action.payload;
    default:
      return state;
  }
};

export default mailRuleReducer;
