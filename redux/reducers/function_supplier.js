import {
    GET_ALL_MASTER_FUNCTION_SUPPLIER,
    RESET_STATE_FORM_FUNCTION,
  } from "redux/types";
  
  const initialState = {
    searchList: [],
    individualData: {},
  };
  
  const functionReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MASTER_FUNCTION_SUPPLIER:
        console.log(action.payload);
        let tempFunction = [];
        action.payload.data.map((data) => {
          tempFunction.push({
            value: data.name,
            label: data.name,
          });
        });
  
        return {
          ...state,
          searchList: tempFunction,
        };
  
      case RESET_STATE_FORM_FUNCTION:
        return state;
      default:
        return state;
    }
  };
  
  export default functionReducer;
  