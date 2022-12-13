import {
  GET_MODULE,
  GET_SUBMODULE,
  GET_FORM,
  GET_ROLE,
  GET_ACTION,
  GET_MAIL_TEMPLATE,
  GET_COUNTRIES,
  GET_MANUFACTURING_SITE,
  GET_SUPPLIER_LIST,
  GET_GENERIC_NAME,
  GET_MATERIAL_CODE,
  GET_MATERIAL_NAME,
  GET_MANUFACTURER,
  GET_SUPPLIER_NAME,
  GET_CURRENCY,
  GET_UOM,
  GET_JENIS_KEMASAN,
  GET_MATERIAL_REVIEW_NO,
  GET_PROMON,
} from "redux/types";

const initialState = {
  roles: [],
  modules: [],
  submodules: [],
  forms: [],
  actions: [],
  mailTemplates: [],
  countries: [],
  manufacturingSite: [],
  supplierList: [],
  materialCode: [],
  materialName: [],
  genericName: [],
  manufacturer: [],
  supplierName: [],
  currency: [],
  uom: [],
  promon: [],
  jenisKemasan: [],
  materialReviewNo: [],
  requestSourcingNo: [],
};

const listOfValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLE:
      return { ...state, roles: action.payload };
    case GET_MODULE:
      return { ...state, modules: action.payload };
    case GET_SUBMODULE:
      return { ...state, submodules: action.payload };
    case GET_FORM:
      return { ...state, forms: action.payload };
    case GET_ACTION:
      return { ...state, actions: action.payload };
    case GET_MAIL_TEMPLATE:
      return { ...state, mailTemplates: action.payload };
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_MANUFACTURING_SITE:
      return { ...state, manufacturingSite: action.payload };
    case GET_SUPPLIER_LIST:
      return { ...state, supplierList: action.payload };
    case GET_MATERIAL_CODE:
      return { ...state, materialCode: action.payload };
    case GET_MATERIAL_NAME:
      return { ...state, materialName: action.payload };
    case GET_GENERIC_NAME:
      return { ...state, genericName: action.payload };
    case GET_MANUFACTURER:
      return { ...state, manufacturer: action.payload };
    case GET_SUPPLIER_NAME:
      return { ...state, supplierName: action.payload };
    case GET_CURRENCY:
      return { ...state, currency: action.payload };
    case GET_UOM:
      return { ...state, uom: action.payload };
    case GET_PROMON:
      return { ...state, promon: action.payload };
    case GET_JENIS_KEMASAN:
      return { ...state, jenisKemasan: action.payload };
    case GET_MATERIAL_REVIEW_NO:
      return { ...state, materialReviewNo: action.payload };
    default:
      return state;
  }
};

export default listOfValueReducer;
