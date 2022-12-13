import axios from "axios";
import { API_MASTER_STAGING_URL, API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_QTY_PER_YEAR,
  GET_ALL_MASTER_QTY_PER_YEAR,
  GET_MASTER_QTY_PER_YEAR_BY_ID,
  POST_MASTER_QTY_PER_YEAR,
  PUT_MASTER_QTY_PER_YEAR,
} from "redux/types";

export const getAllMasterQty =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/QuantitySuggestionPerYear`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_MASTER_QTY_PER_YEAR, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterQtyByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/QuantitySuggestionPerYear/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });

    dispatch({ type: GET_MASTER_QTY_PER_YEAR_BY_ID, payload: response.data });
    // console.log("jalan");
  } catch (error) {
    console.log(error);
  }
};

export const postMasterQty = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/QuantitySuggestionPerYear`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),

      data: data,
    });
    dispatch({ type: POST_MASTER_QTY_PER_YEAR, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMasterQty = (data, id) => async (dispatch) => {
  console.log(id);
  try {
    const response = await axios({
      url: `${API_URL}/api/master/QuantitySuggestionPerYear/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: PUT_MASTER_QTY_PER_YEAR, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteQtyMaster = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/QuantitySuggestionPerYear/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_QTY_PER_YEAR, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
