import axios from "axios";
import {
  API_URL,
  API_MASTER_USER_URL,
  API_REGISTER_SUPPLIER,
  API_DATA_MASTER,
  API_MATERIAL_REVIEW,
  API_SUPPLIER_MANAGEMENT_URL,
} from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ACTION,
  GET_COUNTRIES,
  GET_FORM,
  GET_GENERIC_NAME,
  GET_MAIL_TEMPLATE,
  GET_MANUFACTURER,
  GET_MANUFACTURING_SITE,
  GET_MATERIAL_CODE,
  GET_MATERIAL_NAME,
  GET_MODULE,
  GET_ROLE,
  GET_SUBMODULE,
  GET_SUPPLIER_LIST,
  GET_SUPPLIER_NAME,
  GET_CURRENCY,
  GET_UOM,
  GET_JENIS_KEMASAN,
  GET_MATERIAL_REVIEW_NO,
  GET_PROMON,
} from "redux/types";

export const getAllRoles = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Role`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_ROLE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllModules = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Module`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_MODULE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllSubmodules = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Submodule`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_SUBMODULE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllForms = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Form`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_FORM, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllAkses = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Action`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_ACTION, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllMailTemplate = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/NotificationTemplate`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_MAIL_TEMPLATE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCountries = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Country`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    dispatch({ type: GET_COUNTRIES, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchCountries = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/Country`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    dispatch({ type: GET_COUNTRIES, payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllManufacturingSite = () => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/ManufacturingSite`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MANUFACTURING_SITE, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSupplierList = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: API_REGISTER_SUPPLIER,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1, 
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    dispatch({ type: GET_SUPPLIER_LIST, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllMaterialCode = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/MaterialCode`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    console.log(response);
    dispatch({ type: GET_MATERIAL_CODE, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllMaterialName = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/MaterialName`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    console.log(response);
    dispatch({ type: GET_MATERIAL_NAME, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllGenericName = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/GenericName`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    console.log(response);
    dispatch({ type: GET_GENERIC_NAME, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllManufacturer = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/ManufacturerName`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    console.log(response);
    dispatch({ type: GET_MANUFACTURER, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSupplierName = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/SupplierName`,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    console.log(response);
    dispatch({ type: GET_SUPPLIER_NAME, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCurrency = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/Currency`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_CURRENCY, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUOM = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/Uom`,
      method: "get",
      headers: header,
    });
    dispatch({ type: GET_UOM, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJenisKemasan = () => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/JenisKemasan`,
      method: "GET",
      headers: {
        ...getHeaders(store.getState().auth.token),
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 1000,
      },
    });
    dispatch({ type: GET_JENIS_KEMASAN, payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllMaterialReviewNo = () => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MATERIAL_REVIEW}/api/MaterialReview`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MATERIAL_REVIEW_NO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPromon = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/detail`,
      method: "get",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 20000,
      },
    });
    dispatch({ type: GET_PROMON, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

