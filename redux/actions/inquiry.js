import { API_INQUIRY } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ALL_INQUIRY,
  GET_INQUIRY_BY_ID,
  POST_INQUIRY,
  PUT_INQUIRY,
  DELETE_INQUIRY,
} from "redux/types";
import axios from "axios";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  return filteredFilter.map((data) => `${data[0]}=${data[1]}`).join("|");
};

export const getAllInquiry =
  (page = 1, pageSize = 5, search = "", filter = "") =>
  async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_INQUIRY}/api/Inquiry`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": page,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${search}*`,
          "X-FILTER": formatFilter(filter),
          "X-ORDERBY": "createdDate desc",
        },
      });
      dispatch({ type: GET_ALL_INQUIRY, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getInquiryById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/Inquiry/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_INQUIRY_BY_ID, payload: response.data });
  } catch (error) {
    return error.response;
  }
};

export const postInquiry = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/Inquiry`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_INQUIRY, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const putInquiry = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/Inquiry/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_INQUIRY, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteInquiry = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/Inquiry/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_INQUIRY, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getInquirySupplierName = (supplierName) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/Inquiry/Supplier/${supplierName}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_INQUIRY_SUPPLIER_NAME, payload: response.data });
  } catch (error) {
    return error.response;
  }
};

export const exportExcelInquiry = (filter, searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_INQUIRY}/api/Inquiry/ExportExcel`,
      method: "post",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-FILTER": formatFilter(filter),
        "X-SEARCH": `*${searchQuery}*`,
      },
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
