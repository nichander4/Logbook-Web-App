import axios from "axios";
import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_FUNCTION_SUPPLIER,
  GET_ALL_MASTER_FUNCTION_SUPPLIER,
  GET_ALL_MASTER_FUNCTION_SUPPLIER_WITHOUT_PAGINATION,
  GET_MASTER_FUNCTION_SUPPLIER_BY_ID,
  POST_MASTER_FUNCTION_SUPPLIER,
  PUT_MASTER_FUNCTION_SUPPLIER,
} from "redux/types";

export const getAllMasterFunctionSupplier =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/SupplierFunction`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({
        type: GET_ALL_MASTER_FUNCTION_SUPPLIER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getAllMasterFunctionSupplierWithoutPagination =
  () => async (dispatch) => {
    try {
      const response = await axios({
        url: `${API_URL}/api/master/SupplierFunction`,
        method: "GET",
        headers: getHeaders(store.getState().auth.token),
      });
      dispatch({
        type: GET_ALL_MASTER_FUNCTION_SUPPLIER_WITHOUT_PAGINATION,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterFunctionSupplierByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierFunction/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_MASTER_FUNCTION_SUPPLIER_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addMasterFunctionSupplier = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierFunction`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_FUNCTION_SUPPLIER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateMasterFunctionSupplier = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierFunction/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_FUNCTION_SUPPLIER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterFunctionSupplier = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/SupplierFunction/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_FUNCTION_SUPPLIER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
