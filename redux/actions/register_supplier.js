import axios from "axios";
import { API_REGISTER_SUPPLIER } from "constant";
import { getHeaders, getHeadersSupplier } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ALL_SUPPLIER,
  POST_REGISTER_SUPPLIER,
  GET_MY_PROFILE_SUPPLIER_BY_ID,
  PUT_MY_PROFILE_SUPPLIER,
} from "redux/types";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

export const getAllSupplier =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_REGISTER_SUPPLIER}`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-ORDERBY": "createdDate desc",
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_SUPPLIER, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const postRegisterSupplier = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}`,
      method: "post",
      headers: getHeadersSupplier(),
      data,
    });
    dispatch({ type: POST_REGISTER_SUPPLIER, payload: response.data });

    return response;
    console.log(response);
  } catch (error) {
    return error.response;
  }
};

export const getMyProfileSupplierbyId = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MY_PROFILE_SUPPLIER_BY_ID, payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const approveSupplier = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/${id}/approve`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MY_PROFILE_SUPPLIER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const reviseSupplier = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/${id}/revise`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MY_PROFILE_SUPPLIER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMyProfileSupplier = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MY_PROFILE_SUPPLIER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const exportSupplier = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/ExportExcel`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const exportSupplierListData = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);
    console.log(searchQuery);
    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/ExportExcel`,
      method: "post",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-SEARCH": `*${searchQuery}*`,
      },
      responseType: "blob",
    });
    console.log(response, "respact");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const exportContact = (data) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_REGISTER_SUPPLIER}/ExportExcel/ContactPerson`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const exportContactPersonListData =
  (searchQuery) => async (dispatch) => {
    try {
      console.log(searchQuery);
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_REGISTER_SUPPLIER}/ExportExcel/ContactPerson`,
        method: "post",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-SEARCH": `*${searchQuery}*`,
        },
        responseType: "blob",
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };
