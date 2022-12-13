import { API_SUGGESTION_PROJECT } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
  GENERATE_SUGGESTION_PROJECT,
  GET_ALL_SUGGESTION_PROJECT,
  GET_SUGGESTION_PROJECT_BY_ID,
  PUT_SUGGESTION_PROJECT,
  DELETE_SUGGESTION_PROJECT,
  DOWNLOAD_SUGGESTION_PROJECT,
  EXPORT_SUGGESTION_PROJECT,
  SUBMIT_SUGGESTION_PROJECT,
  REVISE_SUGGESTION_PROJECT,
  APPROVE_SUGGESTION_PROJECT,
} from "redux/types";
import { store } from "redux/store";

export const getAllSuggestionProject =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject`,
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
        type: GET_ALL_SUGGESTION_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const generateSuggestionProject = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/generate`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: GENERATE_SUGGESTION_PROJECT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getSuggestionProjectById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_SUGGESTION_PROJECT_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateSuggestionProject = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_SUGGESTION_PROJECT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteSuggestionProject = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_SUGGESTION_PROJECT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const downloadSuggestionProjectMaterials = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}/download`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      responseType: "blob",
    });
    dispatch({ type: DOWNLOAD_SUGGESTION_PROJECT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const exportSuggestionProject = (data) => async (dispatch) => {
  try {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const data2 = JSON.stringify(data);
    const ws = XLSX.utils.json_to_sheet(data2);
    XLSX.utils.sheet_add_aoa(ws, [["tes", "tes1", "tes2", "tes3"]], {
      origin: "A1",
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data3 = new Blob([excelBuffer], { type: fileType });
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/export`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data3,
    });
    // dispatch({ type: EXPORT_SUGGESTION_PROJECT, payload: response.data });
    return FileSaver.saveAs(response.data, "BidResponseExport" + fileExtension);
  } catch (error) {
    return error.response;
  }
};

export const submitSuggestionProject = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}/submit`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: SUBMIT_SUGGESTION_PROJECT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const reviseSuggestionProject = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}/Revise`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: REVISE_SUGGESTION_PROJECT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const approveSuggestionProject = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUGGESTION_PROJECT}/api/SuggestionProject/${id}/Approve`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: APPROVE_SUGGESTION_PROJECT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
