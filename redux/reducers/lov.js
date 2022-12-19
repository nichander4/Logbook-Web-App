import {
 GET_ROLE,
 GET_MENTOR,
 GET_INTERN_BY_MENTOR,
} from "redux/types";

const initialState = {
  roles: [],
  mentors: [],

};

const listOfValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLE:
      return { ...state, roles: action.payload };
    case GET_MENTOR:
      return { ...state, roles: action.payload };
    case GET_INTERN_BY_MENTOR:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};

export default listOfValueReducer;
