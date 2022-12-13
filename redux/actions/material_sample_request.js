import { API_SAMPLE_REQUEST as API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import { store } from "redux/store";
import {
  GET_ALL_SAMPLE_REQUEST,
  GET_SAMPLE_REQUEST_BY_ID,
  POST_SAMPLE_REQUEST,
  PUT_SAMPLE_REQUEST,
  DELETE_SAMPLE_REQUEST,
  EXPORT_SAMPLE_REQUEST,
  SUBMIT_SAMPLE_REQUEST,
  REVISE_SAMPLE_REQUEST,
  REJECT_SAMPLE_REQUEST,
  APPROVE_SAMPLE_REQUEST,
} from "redux/types";

export const getAllSampleRequest =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/SampleRequest`,
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
        type: GET_ALL_SAMPLE_REQUEST,
        payload: response.data,
      });
    } catch (error) {
      return error.response;
    }
  };

export const addSampleRequest = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: POST_SAMPLE_REQUEST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getSampleRequestById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_SAMPLE_REQUEST_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    return error.response;
  }
};

export const updateSampleRequest = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_SAMPLE_REQUEST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const submitSampleRequest = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}/submit`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: SUBMIT_SAMPLE_REQUEST, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const reviseSampleRequest = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}/revise`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: REVISE_SAMPLE_REQUEST, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const rejectSampleRequest = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}/reject`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: REJECT_SAMPLE_REQUEST, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const approveSampleRequest = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}/approve`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: APPROVE_SAMPLE_REQUEST, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteSampleRequest = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/SampleRequest/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_SAMPLE_REQUEST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const exportSampleRequest = (data) => async (dispatch) => {
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
      url: `${API_URL}/api/SampleRequest/ExportExcel`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data3,
    });
    // dispatch({ type: EXPORT_SAMPLE_REQUEST, payload: response.data });
    return FileSaver.saveAs(
      response.data,
      "SampleRequestExport" + fileExtension
    );
  } catch (error) {
    return error.response;
  }
};
