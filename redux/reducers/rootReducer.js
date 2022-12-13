// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import listSC from "./suggestionContract/listSC";
import requestForecastReducer from "./request_forecast_reducer";
import paginationReducer from "./paginationReducer";

const rootReducer = combineReducers({
  listSC,
  requestForecast: requestForecastReducer,
  pagination: paginationReducer,
});

export default rootReducer;
