import axios from "axios";
import { API_JOB_LIST } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ALL_MASTER_JOB_LIST,
  GET_MASTER_JOB_LIST_BY_ID,
  POST_MASTER_JOB_LIST,
  PUT_MASTER_JOB_LIST,
  DELETE_MASTER_JOB_LIST,
} from "redux/types";

export const getAllMasterJobList =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_JOB_LIST}/api/Approval/MyTask`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_MASTER_JOB_LIST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterJobListByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_JOB_LIST}/api/Approval/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_JOB_LIST_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addMasterJobList = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_JOB_LIST}/api/Approval`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_JOB_LIST, payload: response.data });
    console.log("wes kesubmit ");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateMasterJobList = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/Approval/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_JOB_LIST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterJobList = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/Approval/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_JOB_LIST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
