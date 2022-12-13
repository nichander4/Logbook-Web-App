import { ConstBidComparison } from "redux/constants/bidComparison";

export const actionSetBidComparison = (value) => {
  return {
    type: ConstBidComparison.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterBidComparison = (value) => {
  return {
    type: ConstBidComparison.SET_FILTER,
    payload: value,
  };
};

export const actionClearBidComparison = () => {
  return {
    type: ConstBidComparison.CLEAR,
  };
};

export const actionErrorBidComparison = (value) => {
  return {
    type: ConstBidComparison.FAILED,
    payload: value,
  };
};

export const actionLoadBidComparison = () => {
  return {
    type: ConstBidComparison.LOADING,
  };
};
