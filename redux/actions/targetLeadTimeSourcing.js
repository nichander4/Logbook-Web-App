import { API_URL } from "constant";
import { getHeaders, getTokenCookie } from "helpers/utils";
import axios from "axios";
import { store } from "redux/store";
import {
  GET_ALL_MASTER_LT_SOURCING,
  GET_MASTER_LT_SOURCING_BY_ID,
  POST_MASTER_LT_SOURCING,
  PUT_MASTER_LT_SOURCING,
  DELETE_MASTER_LT_SOURCING,
} from "redux/types";

export const getAllLTSourcing =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/TargetLeadTimeSourcing`,
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
        type: GET_ALL_MASTER_LT_SOURCING,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addLTSourcing = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSourcing`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: POST_MASTER_LT_SOURCING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getLTSourcingById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSourcing/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_MASTER_LT_SOURCING_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateLTSourcing = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSourcing/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_LT_SOURCING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteLTSourcing = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSourcing/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_LT_SOURCING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
