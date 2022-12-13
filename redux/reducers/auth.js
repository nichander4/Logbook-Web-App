import { AUTHENTICATE, DEAUTHENTICATE, STORE_USER_ROLES } from "redux/types";

const initialState = { token: null };

const authReducer = (state = { token: null, userRoles: null }, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, token: action.payload };
    case DEAUTHENTICATE:
      return { token: null };
    case STORE_USER_ROLES:
      return { ...state, userRoles: action.payload };
    default:
      return state;
  }
};

export default authReducer;
