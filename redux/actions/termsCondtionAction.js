import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
  GET_ALL_MASTER_TERMS_CONDITION,
  GET_MASTER_TERMS_CONDITION_BY_ID,
  POST_MASTER_TERMS_CONDITION,
  PUT_MASTER_TERMS_CONDITION,
} from "redux/types";
import { store } from "redux/store";

export const getTaC = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/master/TermsAndCondition`,
      method: "get",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 1,
        "X-ORDERBY": "id desc",
      },
    });
    dispatch({ type: GET_ALL_MASTER_TERMS_CONDITION, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addTaC = (data, token) => async (dispatch) => {
  console.log(data, token);
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TermsAndCondition`,
      method: "post",
      headers: getHeaders(token),
      data,
    });
    dispatch({ type: POST_MASTER_TERMS_CONDITION, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTaCById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TermsAndCondition/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_MASTER_TERMS_CONDITION_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTaC = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TermsAndCondition/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_TERMS_CONDITION, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
