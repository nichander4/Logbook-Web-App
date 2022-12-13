import {
  GET_ALL_MASTER_COUNTRY,
  GET_MASTER_COUNTRY_BY_ID,
  RESET_STATE_FORM,
} from "redux/types";

const initialState = {
  searchList: [],
  individualData: {},
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MASTER_COUNTRY:
      console.log(action.payload);
      let tempCountry = [];
      action.payload.data.map((data) => {
        tempCountry.push({
          value: data.name,
          label: data.name,
        });
      });

      return {
        ...state,
        searchList: tempCountry,
      };
    case GET_MASTER_COUNTRY_BY_ID:
      const tempCountryDetail = {
        code: action.payload.code,
        name: action.payload.name,
      };
      return {
        ...state,
        searchList: [],
        individualData: tempCountryDetail,
      };

    case RESET_STATE_FORM:
      return state;
    default:
      return state;
  }
};

export default countryReducer;
