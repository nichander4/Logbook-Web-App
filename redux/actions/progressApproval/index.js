import { ConstListPA } from "redux/constants/progressApproval";

export const actionSetListPA = (value) => {
  return {
    type: ConstListPA.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterListPA = (value) => {
  return {
    type: ConstListPA.SET_FILTER,
    payload: value,
  };
};

export const actionClearListPA = () => {
  return {
    type: ConstListPA.CLEAR,
  };
};

export const actionErrorListPA = (value) => {
  return {
    type: ConstListPA.FAILED,
    payload: value,
  };
};

export const actionLoadListPA = () => {
  return {
    type: ConstListPA.LOADING,
  };
};
