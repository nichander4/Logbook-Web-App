import { GET_ALL_MONITORING_CONTRACT } from "redux/types";

const initialState = {
  data: [],
};

const monitoringContract = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MONITORING_CONTRACT:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default monitoringContract;