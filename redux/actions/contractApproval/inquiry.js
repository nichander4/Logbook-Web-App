import {
  ConstContractApproval,
  ConstDetailContractApproval,
} from "redux/constants/contractApproval";

export const actionSetContractApproval = (value) => {
  return {
    type: ConstContractApproval.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterContractApproval = (value) => {
  return {
    type: ConstContractApproval.SET_FILTER,
    payload: value,
  };
};

export const actionClearContractApproval = () => {
  return {
    type: ConstContractApproval.CLEAR,
  };
};

export const actionErrorContractApproval = (value) => {
  return {
    type: ConstContractApproval.FAILED,
    payload: value,
  };
};

export const actionLoadContractApproval = () => {
  return {
    type: ConstContractApproval.LOADING,
  };
};

// detail
export const actionSetDetailCA = (value) => {
  return {
    type: ConstDetailContractApproval.SET_DATA,
    payload: value,
  };
};

export const actionSetFilterDetailCA = (value) => {
  return {
    type: ConstDetailContractApproval.SET_FILTER,
    payload: value,
  };
};

export const actionClearDetailCA = () => {
  return {
    type: ConstDetailContractApproval.CLEAR,
  };
};

export const actionErrorDetailCA = (value) => {
  return {
    type: ConstDetailContractApproval.FAILED,
    payload: value,
  };
};

export const actionLoadDetailCA = () => {
  return {
    type: ConstDetailContractApproval.LOADING,
  };
};
