import { combineReducers } from "redux";
import auth from "./auth";
import ppcr from "./ppcr";
import ltsample from "./LTsampleReducer";
import materialFunction from "./materialFunctionReducer";
import TaC from "./termsCondtionReducer";
import masterUser from "./master/user";
import masterSitePrintOutReducer from "./master/site_print_out";
import masterUserAkses from "./master/user_akses";
import lov from "./lov";
import masterClusteringDocument from "./master/clustering_document";
import userProfile from "./user_profile";
import masterScoring from "./master/scoring";
import mailTemplate from "./master/mail/template";
import mailRule from "./master/mail/rule";
import listSC from "./suggestionContract/listSC";
import requestForecastReducer from "./request_forecast_reducer";
import paginationReducer from "./paginationReducer";
import listFC from "./forecastCalculation/index";
import listPA from "./progressApproval/index";
import listRequestBid from "./requestBid/getFormRequestBid/index";
import bidResponse from "./bid_response";
import requestBudget from "./requestBudgetReudcer";
import masterChangeCategory from "./master/change_category";
import dataMaster from "./data_master";
import supplierDocument from "./documentSupplierReducer";
import dataMasterQTY from "./master/qty_per_year";
import dataMasterLTSourcing from "./master/sourcing";
import bidComparison from "./bidComparison/index";
import contractApproval from "./contractApproval/index";
import detailContralApproval from "./contractApproval/detail";
import suggestionProject from "./suggestion_project";
import bankDataMaterialKpartner from "./bank_data_material/kpartner";
import masterCountry from "./country";
import monitoringContract from "./monitoring_contract";
import country from "./country";
import registerSupplier from "./register_supplier";
import assessmentTask from "./assessment/task";
import myTask from "./assessment/myTask";
import inquiryReducer from "./inquiry";
import inquiryResponseReducer from "./inquiryResponse";
import requestSourcing from "./requestSourcingReducer";
import sampleRequest from "./sample_request";
import masterPMType from "./master/pm_type";
import masterFunctionSupplier from "./master/function_supplier";
import masterMaterialCode from "./master/material_code";
import masterJobList from "./master/job_list";
import listSourcing from "./sourcingSelection/listSourcing/index";
import materialReview from "./sourcingSelection/materialReview/index";
import changePic from "./change_PIC_Reducers";
import closeProject from "./close_project";
import transferData from "./transfer_data/index";
import transferDoc from "./transferDoc_reducer";
import intern from './intern_reducers';
import mentor from './mentor_reducers';

export default combineReducers({
  auth,
  ppcr,
  ltsample,
  materialFunction,
  TaC,
  masterUser,
  masterSitePrintOutReducer,
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
  listPA,
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
  bankDataMaterialKpartner,
  masterCountry,
  country,
  monitoringContract,
  registerSupplier,
  assessmentTask,
  myTask,
  inquiryReducer,
  inquiryResponseReducer,
  requestSourcing,
  sampleRequest,
  masterPMType,
  masterFunctionSupplier,
  masterMaterialCode,
  masterJobList,
  listSourcing,
  materialReview,
  changePic,
  transferData,
  closeProject,
  transferDoc,
  intern,
  mentor,
});
