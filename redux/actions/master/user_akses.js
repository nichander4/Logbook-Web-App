import axios from "axios";
import { API_MASTER_STAGING_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_USER_AKSES,
  GET_ALL_MASTER_USER_AKSES,
  GET_MASTER_USER_AKSES_BY_ID,
  POST_MASTER_USER_AKSES,
  PUT_MASTER_USER_AKSES,
} from "redux/types";

export const getAllMasterUserAkses =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/FormAction`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_MASTER_USER_AKSES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterUserAksesByID =
  (id) => async (dispatch) => {
    try {
      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/FormAction/${id}`,
        method: "get",
        headers: getHeaders(store.getState().auth.token)
      });
      dispatch({ type: GET_MASTER_USER_AKSES_BY_ID, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const postMasterUserAkses = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/FormAction`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: POST_MASTER_USER_AKSES, payload: response.data });

    return response
  } catch (error) {
    return error.response;
  }
};

export const putMasterUserAkses = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/FormAction/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: PUT_MASTER_USER_AKSES, payload: response.data });

    return response
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterUserAkses = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/FormAction/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_USER_AKSES, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
