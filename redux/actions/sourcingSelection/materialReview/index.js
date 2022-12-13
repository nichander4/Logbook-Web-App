import { ConstMaterialReview } from "redux/constants/sourcingSelection/materialReview";

export const actionSetMaterialReview = (value) => {
  return { 
    type: ConstMaterialReview.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterMaterialReview = (value) => {
  return {
    type: ConstMaterialReview.SET_FILTER,
    payload: value,
  };
};

export const actionClearMaterialReview = () => {
  return {
    type: ConstMaterialReview.CLEAR,
  };
};

export const actionErrorMaterialReview = (value) => {
  return {
    type: ConstMaterialReview.FAILED,
    payload: value,
  };
};

export const actionLoadMaterialReview = () => {
  return {
    type: ConstMaterialReview.LOADING,
  };
};
