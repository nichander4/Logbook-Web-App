import { POST_USER, CHANGE_PASSWORD } from 'redux/types';

const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return action.payload;
    case CHANGE_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
