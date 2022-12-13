import { GET_ALL_MY_TASK } from "redux/types/assessment/myTask";

const initialState = {
  data: [],
  //   currentPage: 1,
  //   pageSize: 5,
  //   totalPage: 0,
};

const assessmentTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MY_TASK:
      return {
        ...state,
        data: action.payload.data,
      };
    // case GET_TASK_BY_ID:
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    // case POST_TASK:
    //   return action.payload;
    // case PUT_TASK:
    //   return action.payload;
    // case DELETE_TASK:
    //   return action.payload;
    default:
      return state;
  }
};

export default assessmentTaskReducer;
