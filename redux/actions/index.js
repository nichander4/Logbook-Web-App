import { combineReducers } from "redux";
import auth from "../reducers/auth";
import ppcr from "../reducers/ppcr";
import ltsample from "../reducers/LTsampleReducer";
import materialFunction from "../reducers/materialFunctionReducer";
import TaC from "../reducers/termsCondtionReducer";
import masterUser from "../reducers/master/user";
import masterUserAkses from "../reducers/master/user_akses";
import lov from "../reducers/lov";
import masterClusteringDocument from "../reducers/master/clustering_document";
import userProfile from "../reducers/user_profile";
import masterScoring from "../reducers/master/scoring";
import mailTemplate from "../reducers/master/mail/template";
import mailRule from "../reducers/master/mail/rule";
import listSC from "../reducers/suggestionContract/listSC";
import requestForecastReducer from "../reducers/request_forecast_reducer";
import paginationReducer from "../reducers/paginationReducer";
import listFC from "../reducers/forecastCalculation/index";
import listRequestBid from "../reducers/requestBid/getFormRequestBid/index";
import bidResponse from "../reducers/bid_response";
import requestBudget from "../reducers/requestBudgetReudcer";
import masterChangeCategory from "../reducers/master/change_category";
import dataMaster from "../reducers/data_master";
import supplierDocument from "../reducers/documentSupplierReducer";
import dataMasterQTY from "../reducers/master/qty_per_year";
import dataMasterLTSourcing from "../reducers/master/sourcing";
import bidComparison from "../reducers/bidComparison/index";
import contractApproval from "../reducers/contractApproval/index";
import detailContralApproval from "../reducers/contractApproval/detail";
import suggestionProject from "../reducers/suggestion_project";
import registerSuppler from "../reducers/register_supplier";
import country from "../reducers/country";

export default combineReducers({
  auth,
  ppcr,
  ltsample,
  materialFunction,
  TaC,
  masterUser,
  masterUserAkses,
  lov,
  masterClusteringDocument,
  userProfile,
  masterScoring,
  mailTemplate,
  mailRule,
  listSC,
  requestForecast: requestForecastReducer,
  pagination: paginationReducer,
  listSC,
  listFC,
  listRequestBid,
  bidResponse: bidResponse,
  requestBudget,
  masterChangeCategory,
  dataMaster,
  supplierDocument,
  dataMasterQTY,
  dataMasterLTSourcing,
  bidComparison,
  contractApproval,
  detailContralApproval,
  suggestionProject,
  registerSuppler,
  country,
});
