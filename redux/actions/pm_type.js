import { API_URL } from "constant";
import { getHeaders, getTokenCookie } from "helpers/utils";
import axios from "axios";

export const getAllMasterPmType = (
  req,
  pageSize,
  pageNumber,
  searchQuery,
  token
) => {
  return async (dispatch) => {
    const header = getHeaders(token);
    const response = await axios.get(`${API_URL}/api/master/PmType`, {
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": pageNumber,
        "X-PAGESIZE": pageSize,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });
    dispatch(fetchAllData(response.data));
    return response.data;
  };
};

export const getMasterPmTypeByID = (req, id, token) => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}/api/master/PmType/${id}`, {
      method: "GET",
      headers: getHeaders(token),
    });
    dispatch(fetchDataById(response.data));
    return response.data;
  };
};

export const addMasterPmType = (data, token) => async (dispatch) => {
  console.log(data, token);
  return await axios({
    url: `${API_URL}/api/master/PmType`,
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

export const updateMasterPmType = (data, id, token) => async (dispatch) => {
  console.log(data, token);
  return axios({
    url: `${API_URL}/api/master/PmType/${id}`,
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

export const deleteMasterPmType = (id, token) => async (dispatch) => {
  console.log(id, token);
  return axios({
    url: `${API_URL}/api/master/PmType/${id}`,
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
