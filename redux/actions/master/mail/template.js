import axios from "axios";
import { API_MASTER_STAGING_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MAIL_TEMPLATE,
  GET_ALL_MAIL_TEMPLATE,
  GET_MAIL_TEMPLATE_BY_ID,
  POST_MAIL_TEMPLATE,
  PUT_MAIL_TEMPLATE,
} from "redux/types";

export const getAllMailTemplate =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/NotificationTemplate`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_MAIL_TEMPLATE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMailTemplateByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationTemplate/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MAIL_TEMPLATE_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const postMailTemplate = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationTemplate`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MAIL_TEMPLATE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMailTemplate = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationTemplate/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MAIL_TEMPLATE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMailTemplate = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationTemplate/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MAIL_TEMPLATE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
