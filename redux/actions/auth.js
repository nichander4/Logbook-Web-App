import { removeCookie, setCookie } from "helpers/utils";
import { AUTHENTICATE, DEAUTHENTICATE, STORE_USER_ROLES } from "redux/types";

export const authenticate = (token) => (dispatch) => {
  setCookie("token", token);
  dispatch({ type: AUTHENTICATE, payload: token });
};

export const reauthenticate = (token) => (dispatch) => {
  dispatch({ type: AUTHENTICATE, payload: token });
};

export const deauthenticate = () => (dispatch) => {
  removeCookie("token");
  dispatch({ type: DEAUTHENTICATE });
};

export const storeUserRoles = (roles) => (dispatch) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userRoles", JSON.stringify(roles));
  }
  dispatch({ type: STORE_USER_ROLES, payload: roles });
};
