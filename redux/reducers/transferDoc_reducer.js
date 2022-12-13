import {
  GET_ALL_TRANSFER_DOCUMENT,
  GET_TRANSFER_DOCUMENT,
  POST_TRANSFER_DOCUMENT,
  PUT_TRANSFER_DOCUMENT,
  DELETE_TRANSFER_DOCUMENT,
  EXPORT_TRANSFER_DOCUMENT,
  SUBMIT_TRANSFER_DOCUMENT,
  APPROVE_TRANSFER_DOCUMENT,
  RECEIVE_TRANSFER_DOCUMENT,
  REVISE_TRANSFER_DOCUMENT,
  FEEDBACK_RECEIVER_TRANSFER_DOCUMENT,
  FEEDBACK_SOURCING_SPV_TRANSFER_DOCUMENT
} from 'redux/types';

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSFER_DOCUMENT:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage
      };
    case GET_TRANSFER_DOCUMENT:
      return action.payload;
    case POST_TRANSFER_DOCUMENT:
      return action.payload;
    case PUT_TRANSFER_DOCUMENT:
      return action.payload;
    case DELETE_TRANSFER_DOCUMENT:
      return action.payload;
    case EXPORT_TRANSFER_DOCUMENT:
      return action.payload;
    case SUBMIT_TRANSFER_DOCUMENT:
      return action.payload;
    case APPROVE_TRANSFER_DOCUMENT:
      return action.payload;
    case RECEIVE_TRANSFER_DOCUMENT:
      return action.payload;
    case REVISE_TRANSFER_DOCUMENT:
      return action.payload;
    case FEEDBACK_RECEIVER_TRANSFER_DOCUMENT:
      return action.payload;
    case FEEDBACK_SOURCING_SPV_TRANSFER_DOCUMENT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
