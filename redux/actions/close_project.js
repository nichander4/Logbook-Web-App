import { API_CLOSE_PROJECT as API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import { store } from "redux/store";
import {
  GET_ALL_CLOSE_PROJECT_LIST,
  GET_CLOSE_PROJECT_LIST_BY_ID,
  GET_PLM_DATA_CC,
  GET_PLM_DATA_JIP,
  POST_CLOSE_PROJECT_LIST,
  PUT_CLOSE_PROJECT_LIST,
  DELETE_CLOSE_PROJECT_LIST,
  EXPORT_CLOSE_PROJECT_LIST,
} from "redux/types";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  return filteredFilter.map((data) => `${data[0]}=${data[1]}`).join("|");
};

export const getAllCloseProjectList =
  (pageNumber, pageSize, searchQuery, filter) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      console.log({ filter });
      const response = await axios({
        url: `${API_URL}/api/CloseProject`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-FILTER": formatFilter(filter),
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({
        type: GET_ALL_CLOSE_PROJECT_LIST,
        payload: response.data,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };
export const getAllCloseProjectListPLMCC =
  (pageNumber, pageSize, searchQuery, filter) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/CloseProject`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-FILTER": formatFilter(filter),
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({
        type: GET_PLM_DATA_CC,
        payload: response.data,
      });
    } catch (error) {
      return error.response;
    }
  };
export const getAllCloseProjectListPLMJIP =
  (pageNumber, pageSize, searchQuery, filter) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/CloseProject`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-FILTER": formatFilter(filter),
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({
        type: GET_PLM_DATA_JIP,
        payload: response.data,
      });
    } catch (error) {
      return error.response;
    }
  };

export const addCloseProjectList = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/CloseProject`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data,
    });
    dispatch({ type: POST_CLOSE_PROJECT_LIST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getCloseProjectListById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/CloseProject/${id}`,
      method: "GET",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: GET_CLOSE_PROJECT_LIST_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    return error.response;
  }
};

export const updateCloseProjectList = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/CloseProject/${id}`,
      method: "PUT",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_CLOSE_PROJECT_LIST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteCloseProjectList = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/CloseProject/${id}`,
      method: "DELETE",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_CLOSE_PROJECT_LIST, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const exportCloseProjectList = (data) => async (dispatch) => {
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
      url: `${API_URL}/api/CloseProject/ExportExcel`,
      method: "POST",
      headers: getHeaders(store.getState().auth.token),
      data: data3,
    });
    // dispatch({ type: EXPORT_CLOSE_PROJECT_LIST, payload: response.data });
    return FileSaver.saveAs(
      response.data,
      "CloseProjectExport" + fileExtension
    );
  } catch (error) {
    return error.response;
  }
};
