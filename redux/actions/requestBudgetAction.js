import { API_REQUEST_BUDGET } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
    GET_ALL_REQUEST_BUDGET,
    GET_REQUEST_BUDGET_BY_ID,
    PUT_REQUEST_BUDGET,
    DELETE_REQUEST_BUDGET,
} from "redux/types";
import { store } from "redux/store";

export const getAllReqBudget =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_REQUEST_BUDGET}`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });

      console.log(response, "MASUK SINI");
      dispatch({ type: GET_ALL_REQUEST_BUDGET, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getReqBudgetById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REQUEST_BUDGET}/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_REQUEST_BUDGET_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};



export const updateReqBudget = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REQUEST_BUDGET}/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_REQUEST_BUDGET, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteReqBudget = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_REQUEST_BUDGET}/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_REQUEST_BUDGET, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
