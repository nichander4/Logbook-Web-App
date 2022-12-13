import {
  GET_ALL_MAIL_TEMPLATE,
  GET_MAIL_TEMPLATE_BY_ID,
  POST_MAIL_TEMPLATE,
  PUT_MAIL_TEMPLATE,
  DELETE_MAIL_TEMPLATE,
} from "redux/types";

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0,
};

const mailTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MAIL_TEMPLATE:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage,
      };
    case GET_MAIL_TEMPLATE_BY_ID:
      return action.payload;
    case POST_MAIL_TEMPLATE:
      return action.payload;
    case PUT_MAIL_TEMPLATE:
      return action.payload;
    case DELETE_MAIL_TEMPLATE:
      return action.payload;
    default:
      return state;
  }
};

export default mailTemplateReducer;
