import { ConstListFC } from "redux/constants/forecastCalculation";

export const actionSetListFC = (value) => {
  return {
    type: ConstListFC.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterListFC = (value) => {
  return {
    type: ConstListFC.SET_FILTER,
    payload: value,
  };
};

export const actionClearListFC = () => {
  return {
    type: ConstListFC.CLEAR,
  };
};

export const actionErrorListFC = (value) => {
  return {
    type: ConstListFC.FAILED,
    payload: value,
  };
};

export const actionLoadListFC = () => {
  return {
    type: ConstListFC.LOADING,
  };
};
