import { ConstListSC } from "../../../constants/suggestionContract/listSC";

export const actionSetListSC = (value) => {
  return {
    type: ConstListSC.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterListSC = (value) => {
  return {
    type: ConstListSC.SET_FILTER,
    payload: value,
  };
};

export const actionClearListSC = () => {
  return {
    type: ConstListSC.CLEAR,
  };
};

export const actionErrorListSC = (value) => {
  return {
    type: ConstListSC.FAILED,
    payload: value,
  };
};

export const actionLoadListSC = () => {
  return {
    type: ConstListSC.LOADING,
  };
};
