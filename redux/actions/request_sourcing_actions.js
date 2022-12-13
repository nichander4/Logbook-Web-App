import {API_REQUEST_SOURCING as API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
    GET_ALL_REQUEST_SOURCING,
    GET_REQUEST_SOURCING,
    POST_REQUEST_SOURCING,
    PUT_REQUEST_SOURCING,
    DELETE_REQUEST_SOURCING,
    GET_LAST_REQUEST_SOURCING,
    SUBMIT_REQUEST_SOURCING,
    APPROVE_REQUEST_SOURCING,
    REJECT_REQUEST_SOURCING,
    REVISE_REQUEST_SOURCING,
    ASSIGN_REQUEST_SOURCING,
  } from "redux/types"; 
import { store } from "redux/store";


const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

export const getAllRequestSourcing =
  (pageNumber = 1, pageSize = 5, searchQuery = "", filter = "") =>
  async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/RequestSourcing`,
      //  url: "http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing",
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": formatFilter(filter),
          "X-ORDERBY": "createdDate desc",
          "X-SEARCHFIELD": `no|fupbNo|projectName|projectName|createdByName|createdDate|statusText|sourcingProgress`,
        },
      });
      dispatch({ type: GET_ALL_REQUEST_SOURCING, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getRequestSourcingById = (id) => async (dispatch) => {
  try {
    const response = await axios({
       url: `${API_URL}/api/RequestSourcing/${id}`,
      //  url: `http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    
    dispatch({ type: GET_REQUEST_SOURCING, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addRequestSourcing = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing`,
      // url: `http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_REQUEST_SOURCING, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateRequestSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
       url: `${API_URL}/api/RequestSourcing/${id}`,
      //  url: `http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_REQUEST_SOURCING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteRequestSourcing = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/${id}`,
      // url: `http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_REQUEST_SOURCING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const ReqSourcingFilter = async (filterValue, token) => {
  const header = getHeaders(token);
  if (token) {
    let response = await axios({
      url: `${API_URL}/api/RequestSourcing`,
      // url: `http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing`,
      method: "get",
      headers: {
        ...header,
        "X-PAGINATION": "true",
        "X-PAGE": "1",
        "X-PAGESIZE": "5",
        "X-FILTER": "",
        "X-SEARCH": `*${filterValue}*`,
        "X-ORDERBY": "createdDate desc",
        "X-SEARCHFIELD": `no|fupbNo|projectName|projectName|createdByName|createdDate|statusText|sourcingProgress`,
      },
    });

    return response?.data?.data;
  }
};

export const exportExcelReqSourcing = (filter, searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/export`,
      // url: `http://kpartner-request-sourcing-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/RequestSourcing/export`,
      method: "post",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-FILTER": formatFilter(filter),
        "X-SEARCH": `*${searchQuery}*`,
        "X-SEARCHFIELD": `no|fupbNo|projectName|projectName|createdByName|createdDate|statusText|sourcingProgress`,
      },
      responseType: "blob",
    });
    return response;
  } catch (error) {
    console.log(error);
  }

};


export const submitRequestSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/${id}/submit`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: SUBMIT_REQUEST_SOURCING, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const reviseRequestSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/${id}/revise`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: REVISE_REQUEST_SOURCING, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const rejectRequestSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/${id}/reject`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: REJECT_REQUEST_SOURCING, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const approveRequestSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/${id}/approve`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: APPROVE_REQUEST_SOURCING, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const assignRequestSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/RequestSourcing/${id}/assign`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: ASSIGN_REQUEST_SOURCING, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};



