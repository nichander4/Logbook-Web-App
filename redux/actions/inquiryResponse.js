import { API_INQUIRY } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ALL_INQUIRY_RESPONSE,
  GET_INQUIRY_RESPONSE_BY_ID,
  POST_INQUIRY_RESPONSE,
  PUT_INQUIRY_RESPONSE,
  DELETE_INQUIRY_RESPONSE,
} from "redux/types";
import axios from "axios";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  return filteredFilter.map((data) => `${data[0]}=${data[1]}`).join("|");
};

export const getAllInquiryResponse =
  (
    page = 1,
    pageSize = 5,
    search = "",
    filter = "",
    startDate = "",
    targetDate = ""
  ) =>
  async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_INQUIRY}/api/InquiryResponse`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": page,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${search}*`,
          "X-FILTER": formatFilter(filter),
          "X-ORDERBY": "createdDate desc",
          "CSTM-STARTDATE": startDate,
          "CSTM-ENDDATE": targetDate,
        },
      });
      dispatch({ type: GET_ALL_INQUIRY_RESPONSE, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getInquiryResponseById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/InquiryResponse/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_INQUIRY_RESPONSE_BY_ID, payload: response.data });
  } catch (error) {
    return error.response;
  }
};

export const postInquiryResponse = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/InquiryResponse`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_INQUIRY_RESPONSE, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const putInquiryResponse = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/InquiryResponse/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_INQUIRY_RESPONSE, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteInquiryResponse = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_INQUIRY}/api/InquiryResponse/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_INQUIRY_RESPONSE, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const exportExcelInquiryResponse = (filter, searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_INQUIRY}/api/InquiryResponse/ExportExcel`,
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
