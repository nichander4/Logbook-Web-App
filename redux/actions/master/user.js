import axios from "axios";
import { API_MASTER_STAGING_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_USER,
  GET_ALL_MASTER_USER,
  GET_MASTER_USER_BY_ID,
  GET_MASTER_USER_BY_USERNAME,
  POST_MASTER_USER,
  PUT_MASTER_USER,
} from "redux/types";

export const getAllMasterUser =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/User`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-SEARCHFIELD": "Nik|Name|Department",
        },
      });
      dispatch({ type: GET_ALL_MASTER_USER, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getMasterUserByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/User/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_USER_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getMasterUserByUsername = (username) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/User/username/${username}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_USER_BY_USERNAME, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const postMasterUser = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/User`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_USER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMasterUser = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/User/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_USER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const resetPasswordMasterUser = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/User/resetPassword/${id}`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: PUT_MASTER_USER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterUser = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/User/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_USER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
