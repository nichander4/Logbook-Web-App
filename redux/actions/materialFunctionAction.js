import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import { store } from "redux/store";
import {
  GET_ALL_MASTER_MAT_FUNCTION,
  GET_MASTER_MAT_FUNCTION_BY_ID,
  POST_MASTER_MAT_FUNCTION,
  PUT_MASTER_MAT_FUNCTION,
  DELETE_MASTER_MAT_FUNCTION,
} from "redux/types";

export const getAllMatFunc =
  () => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/InfoForMaterialFunction`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": 1,
          "X-PAGESIZE": 1,
          "X-ORDERBY": "id desc",
        },
      });
      dispatch({ type: GET_ALL_MASTER_MAT_FUNCTION, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export const addMatFunc = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialFunction`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_MAT_FUNCTION, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

// export const DeleteMatFunc = (id) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_URL}/api/master/InfoForMaterialFunction/${id}`,
//       method: "delete",
//       headers: getHeaders(store.getState().auth.token),
//     });
//     dispatch({ type: DELETE_MASTER_MAT_FUNCTION, payload: response.data });

//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

export const getDataMatFuncById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialFunction/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_MAT_FUNCTION_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateDataMatFunc = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialFunction/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_MAT_FUNCTION, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
