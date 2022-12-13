import { ConstListSourcing } from "redux/constants/sourcingSelection/listSourcing";

export const actionSetListSourcing = (value) => {
  return {
    type: ConstListSourcing.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterListSourcing = (value) => {
  return {
    type: ConstListSourcing.SET_FILTER,
    payload: value,
  };
};

export const actionClearListSourcing = () => {
  return {
    type: ConstListSourcing.CLEAR,
  };
};

export const actionErrorListSourcing = (value) => {
  return {
    type: ConstListSourcing.FAILED,
    payload: value,
  };
};

export const actionLoadListSourcing = () => {
  return {
    type: ConstListSourcing.LOADING,
  };
};
