import axios from "axios";
import { API_MASTER_STAGING_URL, API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_COUNTRY,
  GET_ALL_MASTER_COUNTRY,
  GET_MASTER_COUNTRY_BY_ID,
  POST_MASTER_COUNTRY,
  PUT_MASTER_COUNTRY,
  RESET_STATE_FORM,
} from "redux/types";

export const getAllMasterCountry =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      console.log(searchQuery, "QUERY");
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/Country`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": 1,
          "X-PAGESIZE": 10,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      // return response.data;
      dispatch({ type: GET_ALL_MASTER_COUNTRY, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterCountryByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Country/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });

    dispatch({ type: GET_MASTER_COUNTRY_BY_ID, payload: response.data });
    // console.log("jalan");
  } catch (error) {
    console.log(error);
  }
};

export const postMasterCountry = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Country`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),

      data: data,
    });
    dispatch({ type: POST_MASTER_COUNTRY, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMasterCountry = (data, id) => async (dispatch) => {
  console.log(id);
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Country/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: PUT_MASTER_COUNTRY, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterCountry = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/Country/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_COUNTRY, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const resetFormStateAction = () => (dispatch) => {
  dispatch({ type: RESET_STATE_FORM });
};
