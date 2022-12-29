import { API as API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
  GET_ALL_INTERN,
  GET_INTERN_BY_ID,
  POST_INTERN,
  PUT_INTERN,
  DELETE_INTERN,
} from "redux/types";
import { store } from "redux/store";

export const getAllIntern =
  (pageNumber, pageSize, searchQuery, filterQuery="") => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/User/Intern`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": filterQuery,
        },
      });
      console.log(response.data, "MASUK SINI");
      dispatch({ type: GET_ALL_INTERN, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getInternById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_INTERN_BY_ID, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateIntern = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_INTERN, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteIntern = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_INTERN, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getLogbook = (id) => async () => {
  try {
    const response = await axios({
      url: `${API_URL}/api/Logbook/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const entryLogbook = (id, data) => async () => {
  try {
    const response = await axios({
      url: `${API_URL}/api/LogbookItem/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const submitLogbook = (id) => async () => {
  try {
    const response = await axios({
      url: `${API_URL}/api/Logbook/${id}/Submit`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
export const approveLogbook = (id, data) => async () => {
  try {
    const response = await axios({
      url: `${API_URL}/api/Logbook/${id}/Approve`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
export const reviseLogbook = (id, data) => async () => {
  try {
    const response = await axios({
      url: `${API_URL}/api/Logbook/${id}/Revise`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
