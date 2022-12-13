import axios from "axios";
import { API_MASTER_SITE_PRINT_OUT_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  GET_ALL_MASTER_SITE_PRINT_OUT,
  GET_MASTER_SITE_PRINT_OUT_BY_ID,
  POST_MASTER_SITE_PRINT_OUT,
  PUT_MASTER_SITE_PRINT_OUT,
  DELETE_MASTER_SITE_PRINT_OUT,
} from "redux/types";
import { setPageCount } from "redux/action/pagination";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

export const getAllMasterSitePrintOut =
  (pageNumber = 1, pageSize = 5, searchQuery = "", filter = "") => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_MASTER_SITE_PRINT_OUT_URL}/api/PrintOut`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": formatFilter(filter),
          "X-ORDERBY": "createdDate desc",
        },
      });
      dispatch({ type: GET_ALL_MASTER_SITE_PRINT_OUT, payload: response.data });
     // dispatch(setPageCount(response.data.totalPage));

      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterSitePrintOutByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_SITE_PRINT_OUT_URL}/api/PrintOut/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_SITE_PRINT_OUT_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const postMasterSitePrintOut = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_SITE_PRINT_OUT_URL}/api/PrintOut`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_SITE_PRINT_OUT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMasterSitePrintOut = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_SITE_PRINT_OUT_URL}/api/PrintOut/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_SITE_PRINT_OUT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterSitePrintOut = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_SITE_PRINT_OUT_URL}/api/PrintOut/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_SITE_PRINT_OUT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
