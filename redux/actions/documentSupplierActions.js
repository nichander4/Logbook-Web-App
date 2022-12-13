import axios from "axios";
import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import {
  GET_ALL_MASTER_SUPPLIER_DOCUMENT,
  GET_MASTER_SUPPLIER_DOCUMENT_BY_ID,
  DELETE_MASTER_SUPPLIER_DOCUMENT,
  POST_MASTER_SUPPLIER_DOCUMENT,
  PUT_MASTER_SUPPLIER_DOCUMENT,
} from "redux/types";
import { store } from "redux/store";

export const getAllMasterSupplierDocument =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/SupplierDocument`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });

      console.log(response, "respact");
      dispatch({
        type: GET_ALL_MASTER_SUPPLIER_DOCUMENT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getAllMasterSupplierDocumentData =
  (requirement) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/SupplierDocument`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGESIZE": 1000,
          "X-FILTER": `neededBy=${requirement}`,
        },
      });

      dispatch({
        type: GET_ALL_MASTER_SUPPLIER_DOCUMENT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterSupplierDocumentById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierDocument/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_MASTER_SUPPLIER_DOCUMENT_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addMasterSupplierDocument = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierDocument`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_SUPPLIER_DOCUMENT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterSupplierDocument = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierDocument/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_SUPPLIER_DOCUMENT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateMasterSupplierDocument = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierDocument/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_SUPPLIER_DOCUMENT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
