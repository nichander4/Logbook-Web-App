import axios from "axios";
import { API_MASTER_STAGING_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MAIL_RULE,
  GET_ALL_MAIL_RULE,
  GET_MAIL_RULE_BY_ID,
  POST_MAIL_RULE,
  PUT_MAIL_RULE,
} from "redux/types";

export const getAllMailRule =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/NotificationRule`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({ type: GET_ALL_MAIL_RULE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMailRuleByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationRule/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MAIL_RULE_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const postMailRule = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationRule`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MAIL_RULE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMailRule = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationRule/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MAIL_RULE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMailRule = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/NotificationRule/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MAIL_RULE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
