import { API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";

export const getAllMasterMaterialCode = (req, token) => {
  return async (dispatch) => {
    const header = getHeaders(token);
    const response = await axios.get(
      `${API_URL}/api/master/InfoForMaterialCode`,
      {
        method: "GET",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": 1,
          "X-PAGESIZE": 1,
          "X-ORDERBY": "id desc",
        },
      }
    );
    dispatch(fetchAllData(response.data));
    return response.data;
  };
};

export const getMasterMaterialCodeByID = (req, id, token) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${API_URL}/api/master/InfoForMaterialCode/${id}`,
      {
        method: "GET",
        headers: getHeaders(token),
      }
    );
    dispatch(fetchDataById(response.data));
    return response.data;
  };
};

export const addMasterMaterialCode = (data, token) => async (dispatch) => {
  return await axios({
    url: `${API_URL}/api/master/InfoForMaterialCode`,
    method: "POST",
    headers: getHeaders(token),
    data: data,
  })
    .then((response) => {
      if (!response.data) {
        alert("Data can't be submitted, please try again later");
      } else {
        alert("data has been added successfully");
      }
    })
    .catch((error) => console.log(error));
};

export const updateMasterMaterialCode =
  (data, id, token) => async (dispatch) => {
    console.log(data, token);
    return axios({
      url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
      method: "PUT",
      headers: getHeaders(token),
      data: data,
    })
      .then((response) => {
        if (!response.data) {
          alert("Data can't be submitted, please try again later");
        } else {
          alert("data has been edited successfully");
        }
      })
      .catch((error) => console.log(error));
  };

export const deleteMasterMaterialCode = (id, token) => async (dispatch) => {
  console.log(id, token);
  return axios({
    url: `${API_URL}/api/master/InfoForMaterialCode/${id}`,
    method: "DELETE",
    headers: getHeaders(token),
  })
    .then((response) => {
      if (response.data.message) {
        alert("Sorry, you are unauthorized to delete this data!");
      } else {
        alert("Data deleted successfully!");
      }
    })
    .catch((error) => console.log(error));
};

export const fetchAllData = (data) => {
  return {
    type: "FETCH_ALLDATA",
    payload: data,
  };
};

export const fetchDataById = (data) => {
  return {
    type: "FETCH_DATABYID",
    payload: data,
  };
};

export const AddData = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const UpdateData = (data) => {
  return {
    type: "FETCH_UPDATEDATA",
    payload: data,
  };
};

export const DeleteData = (data) => {
  return {
    type: "FETCH_DELETEDATA",
    payload: data,
  };
};
