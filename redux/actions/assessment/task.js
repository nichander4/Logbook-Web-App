import axios from "axios";
import { API_ASSESSMENT_TASK, API_COMMENTS_DEV } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_TASK,
  GET_ALL_TASK,
  GET_TASK_BY_ID,
  POST_TASK,
  PUT_TASK,
} from "redux/types/assessment/task";

export const getAllTask =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_ASSESSMENT_TASK}/api/Task`, // API Endpoint
        method: "GET", // API Method
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        }, // API Headers
      });
      dispatch({ type: GET_ALL_TASK, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const downloadAssessmentTask = () => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_ASSESSMENT_TASK}/api/Task/ExportExcel`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      responseType: "blob",
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTaskByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_ASSESSMENT_TASK}/api/Task/${id}`, // API Endpoint
      method: "GET", // API Method
      headers: getHeaders(store.getState().auth.token), // API Headers
    });
    dispatch({ type: GET_TASK_BY_ID, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postTask = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_ASSESSMENT_TASK}/api/Task`, // API Endpoint
      method: "POST", // API Method
      headers: getHeaders(store.getState().auth.token), // API Headers
      data, // API Body
    });
    dispatch({ type: POST_TASK, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const putTask = (id, data) => async (dispatch) => {
  console.log({ id });
  console.log({ data });
  try {
    const response = await axios({
      url: `${API_ASSESSMENT_TASK}/api/Task/${id}`, // API Endpoint
      method: "PUT", // API Method (you can use PUT or PATCH, it depends on the project)
      headers: getHeaders(store.getState().auth.token), // API Headers
      data, // API Body
    });
    dispatch({ type: PUT_TASK, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_ASSESSMENT_TASK}/api/Task/${id}`, // API Endpoint
      method: "DELETE", // API Method
      headers: getHeaders(store.getState().auth.token), // API Headers
    });
    dispatch({ type: DELETE_TASK, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const ppcrReminderTask = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_ASSESSMENT_TASK}/api/Task/PpcrReminder`, // API Endpoint
      method: "POST", // API Method
      headers: getHeaders(store.getState().auth.token), // API Headers
      data, // API Body
    });
    dispatch({ type: POST_TASK, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const postComment = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_COMMENTS_DEV}/api/comment`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    //dispatch({ type: POST_COMMENT, payload: response.data });
    // alert("berhasil");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllSupplierList = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: API_REGISTER_SUPPLIER,
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": 1,
        "X-PAGESIZE": 4,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    dispatch({ type: GET_SUPPLIER_LIST, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};
