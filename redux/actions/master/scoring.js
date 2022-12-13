import axios from "axios";
import { API_MASTER_SCORING_URL, API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_SCORING,
  GET_ALL_MASTER_SCORING,
  GET_MASTER_SCORING_BY_ID,
  POST_MASTER_SCORING,
  PUT_MASTER_SCORING,
} from "redux/types";

export const getAllMasterScoring =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/Scoring`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_MASTER_SCORING, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterScoringByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Scoring/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_SCORING_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const postMasterScoring = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Scoring`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_SCORING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMasterScoring = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Scoring/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_SCORING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterScoring = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Scoring/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_SCORING, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
