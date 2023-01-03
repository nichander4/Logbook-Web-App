import {
  GET_ALL_MENTOR,
  GET_MENTOR_BY_ID,
  POST_MENTOR,
  PUT_MENTOR,
  DELETE_MENTOR
} from 'redux/types';

const initialState = {
  data: [],
  currentPage: 0,
  pageSize: 0,
  totalPage: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MENTOR:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPage: action.payload.totalPage
      };
    case GET_MENTOR_BY_ID:
      return action.payload;
    case POST_MENTOR:
      return action.payload;
    case PUT_MENTOR:
      return action.payload;
    case DELETE_MENTOR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
