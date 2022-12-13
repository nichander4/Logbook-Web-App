import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
  GET_ALL_MASTER_CHANGE_CATEGORY,
  GET_MASTER_CHANGE_CATEGORY_BY_ID,
  POST_MASTER_CHANGE_CATEGORY,
  PUT_MASTER_CHANGE_CATEGORY,
  DELETE_MASTER_CHANGE_CATEGORY,
} from "redux/types";
import { store } from "redux/store";

export const getAllChangeCategories =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/ChangeCategory`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });

      console.log(response, "API Response");
      dispatch({
        type: GET_ALL_MASTER_CHANGE_CATEGORY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addChangeCategory = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/ChangeCategory`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_CHANGE_CATEGORY, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getChangeCategoryById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/ChangeCategory/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_MASTER_CHANGE_CATEGORY_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateChangeCategory = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/ChangeCategory/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_CHANGE_CATEGORY, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteChangeCategory = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/ChangeCategory/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_CHANGE_CATEGORY, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
