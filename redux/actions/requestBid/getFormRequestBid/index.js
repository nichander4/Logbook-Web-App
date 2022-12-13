import { ConstRequestBid } from "redux/constants/requestBid/getFormRequestBid";

export const actionSetRequestBid = (value) => {
  return {
    type: ConstRequestBid.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterRequestBid = (value) => {
  return {
    type: ConstRequestBid.SET_FILTER,
    payload: value,
  };
};

export const actionClearRequestBid = () => {
  return {
    type: ConstRequestBid.CLEAR,
  };
};

export const actionErrorRequestBid = (value) => {
  return {
    type: ConstRequestBid.FAILED,
    payload: value,
  };
};

export const actionLoadRequestBid = () => {
  return {
    type: ConstRequestBid.LOADING,
  };
};
