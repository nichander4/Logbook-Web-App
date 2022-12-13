import axios from "axios";
import { API_DATA_MASTER } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ALL_DATA_MASTER_DETAIL,
  GET_ALL_DATA_MASTER_GROUPED,
  GET_ALL_DATA_MASTER_HEADER,
  GET_DATA_MASTER_BY_ID,
  PUT_DATA_MASTER,
} from "redux/types";

const formatFilterGrouped = (filterData) => {
  console.log(filterData);
  const filteredFilter = Object.entries(filterData).filter(
    (data) => (data[1] !== "" && data[1] !== null)
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

const formatFilterHeader = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) =>
      data[0] === "sbu" ||
      data[0] === "ou" ||
      data[0] === "site" ||
      data[0] === "genericName" ||
      data[0] === "singleSource" ||
      data[0] === "singleCountry" ||
      (data[1] !== "" && data[1] !== null)
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData);
  console.table(filteredFilter);
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

export const getAllDataMasterGrouped =
  (filter, pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      console.table(formatFilterGrouped(filter));

      const response = await axios({
        url: `${API_DATA_MASTER}/api/DataMaster/header/grouped`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": formatFilterGrouped(filter),
        },
      });
      dispatch({ type: GET_ALL_DATA_MASTER_GROUPED, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const getAllDataMasterHeader =
  (filter, pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      console.table(formatFilterHeader(filter));

      const response = await axios({
        url: `${API_DATA_MASTER}/api/DataMaster/header`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": formatFilterHeader(filter),
        },
      });
      dispatch({ type: GET_ALL_DATA_MASTER_HEADER, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const getDataMasterHeaderByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/header/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_DATA_MASTER_BY_ID, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllDataMasterDetail =
  (filter, pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      console.log(formatFilter(filter), "filter detail");

      const response = await axios({
        url: `${API_DATA_MASTER}/api/DataMaster/detail`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": formatFilter(filter),
        },
      });
      dispatch({ type: GET_ALL_DATA_MASTER_DETAIL, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const putDataMaster = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/header/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_DATA_MASTER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const downloadGrouped = (filter, searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);
    console.log(formatFilterGrouped(filter), 'filter download');

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/header/grouped/export`,
      method: "post",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-FILTER": formatFilterGrouped(filter),
        "X-SEARCH": `*${searchQuery}*`,
      },
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const downloadHeader = (filter) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/header/export`,
      method: "post",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-FILTER": formatFilter(filter),
      },
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const downloadDetail = (filter) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/detail/export`,
      method: "post",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-FILTER": formatFilter(filter),
      },
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const triggerFormulaCalculation = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/calculate`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const checkCalculationProgress = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_DATA_MASTER}/api/DataMaster/calculate/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
