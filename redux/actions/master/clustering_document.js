import axios from "axios";
import { API_MASTER_STAGING_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_CLUSTERING_DOCUMENT,
  GET_ALL_MASTER_CLUSTERING_DOCUMENT,
  GET_MASTER_CLUSTERING_DOCUMENT_BY_ID,
  POST_MASTER_CLUSTERING_DOCUMENT,
  PUT_MASTER_CLUSTERING_DOCUMENT,
} from "redux/types";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== false
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

export const getAllMasterClusteringDocument =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/DocumentClustering`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({
        type: GET_ALL_MASTER_CLUSTERING_DOCUMENT,
        payload: response.data,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getAllClusteringDocumentBDM =
  (isApi, isExcipient, isExtract, isPrimaryPackaging, isSecondaryPackaging) =>
  async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const tempFilter = {
        isApi,
        isExcipient,
        isExtract,
        isPrimaryPackaging,
        isSecondaryPackaging,
      };

      const response = await axios({
        url: `${API_MASTER_STAGING_URL}/api/master/DocumentClustering`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": 1,
          "X-PAGESIZE": 1000,
          "X-FILTER": `cluster=0|${formatFilter(tempFilter)}`,
        },
      });
      // dispatch({
      //   type: GET_ALL_MASTER_CLUSTERING_DOCUMENT,
      //   payload: response.data,
      // });
      console.log(response, 'respacts');
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const getMasterCluteringDocumentByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/DocumentClustering/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_MASTER_CLUSTERING_DOCUMENT_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postMasterClusteringDocument = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/DocumentClustering`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({
      type: POST_MASTER_CLUSTERING_DOCUMENT,
      payload: response.data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putMasterClusteringDocument = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/DocumentClustering/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({
      type: PUT_MASTER_CLUSTERING_DOCUMENT,
      payload: response.data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMasterClusteringDocument = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MASTER_STAGING_URL}/api/master/DocumentClustering/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: DELETE_MASTER_CLUSTERING_DOCUMENT,
      payload: response.data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
