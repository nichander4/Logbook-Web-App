import axios from "axios";
import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_MASTER_MATERIAL_CODE,
  GET_ALL_MASTER_MATERIAL_CODE,
  GET_MASTER_MATERIAL_CODE_BY_ID,
  POST_MASTER_MATERIAL_CODE,
  PUT_MASTER_MATERIAL_CODE,
} from "redux/types";

// export const getAllMasterMaterialCode = (req, token) => {
//   return async (dispatch) => {
//     const header = getHeaders(token);
//     const response = await axios.get(
//       `${API_URL}/api/master/InfoForMaterialCode`,
//       {
//         method: "GET",
//         headers: {
//           ...header,
//           "X-PAGINATION": true,
//           "X-PAGE": 1,
//           "X-PAGESIZE": 1,
//           "X-ORDERBY": "id desc",
//         },
//       }
//     );
//     dispatch(fetchAllData(response.data));
//     return response.data;
//   };
// };

export const getAllMasterMaterialCode =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/master/InfoForMaterialCode`,
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": 1,
          "X-PAGESIZE": 1,
          "X-ORDERBY": "id desc",
        },
      });
      dispatch({ type: GET_ALL_MASTER_MATERIAL_CODE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

// export const getMasterMaterialCodeByID = (req, id, token) => {
//   return async (dispatch) => {
//     const response = await axios.get(
//       `${API_URL}/api/master/InfoForMaterialCode/${id}`,
//       {
//         method: "GET",
//         headers: getHeaders(token),
//       }
//     );
//     dispatch(fetchDataById(response.data));
//     return response.data;
//   };
// };

export const getMasterMaterialCodeByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: GET_MASTER_MATERIAL_CODE_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

// export const addMasterMaterialCode = (data, token) => async (dispatch) => {
//   return await axios({
//     url: `${API_URL}/api/master/InfoForMaterialCode`,
//     method: "POST",
//     headers: getHeaders(token),
//     data: data,
//   })
//     .then((response) => {
//       if (!response.data) {
//         alert("Data can't be submitted, please try again later");
//       } else {
//         alert("data has been added successfully");
//       }
//     })
//     .catch((error) => console.log(error));
// };

export const addMasterMaterialCode = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialCode`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_MASTER_MATERIAL_CODE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

// export const updateMasterMaterialCode =
//   (data, id, token) => async (dispatch) => {
//     console.log(data, token);
//     return axios({
//       url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
//       method: "PUT",
//       headers: getHeaders(token),
//       data: data,
//     })
//       .then((response) => {
//         if (!response.data) {
//           alert("Data can't be submitted, please try again later");
//         } else {
//           alert("data has been edited successfully");
//         }
//       })
//       .catch((error) => console.log(error));
//   };

export const updateMasterMaterialCode = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_MASTER_MATERIAL_CODE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

// export const deleteMasterMaterialCode = (id, token) => async (dispatch) => {
//   console.log(id, token);
//   return axios({
//     url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
//     method: "DELETE",
//     headers: getHeaders(token),
//   })
//     .then((response) => {
//       if (response.data.message) {
//         alert("Sorry, you are unauthorized to delete this data!");
//       } else {
//         alert("Data deleted successfully!");
//       }
//     })
//     .catch((error) => console.log(error));
// };

export const deleteMasterMaterialCode = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({ type: DELETE_MASTER_MATERIAL_CODE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
