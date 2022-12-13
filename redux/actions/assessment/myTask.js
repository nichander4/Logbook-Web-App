import axios from "axios";
import { API_ASSESSMENT_TASK, API_MY_TASK } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import { GET_ALL_MY_TASK } from "redux/types/assessment/myTask";

export const getAllMyTask = (userName) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_MY_TASK}/Parallel/Kpartner?Pic=${encodeURIComponent(
        userName
      )}`, // API Endpoint
      method: "GET", // API Method
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      }, // API Headers
    });

    dispatch({ type: GET_ALL_MY_TASK, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const downloadAssessmentTask = () => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_ASSESSMENT_TASK}/api/Task/ExportExcel`,
//       method: "post",
//       headers: getHeaders(store.getState().auth.token),
//       responseType: "blob",
//     });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// export const getTaskByID = (id) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_ASSESSMENT_TASK}/api/Task/${id}`, // API Endpoint
//       method: "GET", // API Method
//       headers: getHeaders(store.getState().auth.token), // API Headers
//     });
//     dispatch({ type: GET_TASK_BY_ID, payload: response.data });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const putTask = (id, data) => async (dispatch) => {
//   console.log({ id });
//   console.log({ data });
//   try {
//     const response = await axios({
//       url: `${API_ASSESSMENT_TASK}/api/Task/${id}`, // API Endpoint
//       method: "PUT", // API Method (you can use PUT or PATCH, it depends on the project)
//       headers: getHeaders(store.getState().auth.token), // API Headers
//       data, // API Body
//     });
//     dispatch({ type: PUT_TASK, payload: response.data });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// export const deleteTask = (id) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_ASSESSMENT_TASK}/api/Task/${id}`, // API Endpoint
//       method: "DELETE", // API Method
//       headers: getHeaders(store.getState().auth.token), // API Headers
//     });
//     dispatch({ type: DELETE_TASK, payload: response.data });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };
