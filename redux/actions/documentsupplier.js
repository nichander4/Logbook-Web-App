import axios from "axios";
import { API_URL } from "constant";
import { getTokenCookie, getHeaders } from "helpers/utils";

export const getAllMasterSupplierDocument =
  (req, pageSize, pageNumber, searchQuery, token) => async (dispatch) => {
    const header = getHeaders(token);
    const response = await axios.get(`${API_URL}/api/master/SupplierDocument`, {
      method: "GET",
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": pageNumber,
        "X-PAGESIZE": pageSize,
        "X-SEARCH": `*${searchQuery}*`,
      },
    });

    dispatch(getAllData(response.data));
    return response.data;
  };

export const getMasterSupplierDocumentById = (req, id, token) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${API_URL}/api/master/SupplierDocument/${id}`,
      {
        method: "GET",
        headers: getHeaders(token),
      }
    );

    dispatch(getDataById(response.data));

    return response.data;
  };
};

export const addMasterSupplierDocument = (data, token) => async (dispatch) => {
  console.log(data, token);

  return await axios({
    url: `${API_URL}/api/master/SupplierDocument`,
    method: "POST",
    headers: getHeaders(token),
    data: data,
  })
    .then((response) => {
      if (!response.data) {
        alert("Data can't be submitted, please try again later");
      } else {
        alert("Data has been added successfully");
      }
    })
    .catch((error) => console.log(error));
};

export const deleteMasterSupplierDocument = (id, token) => async (dispatch) => {
  console.log(id, token, "ests");
  return await axios({
    url: `${API_URL}/api/master/SupplierDocument/${id}`,
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

export const updateMasterSupplierDocument =
  (data, id, token) => async (dispatch) => {
    console.log(data, token);

    return await axios({
      url: `${API_URL}/api/master/SupplierDocument/${id}`,
      method: "PUT",
      headers: getHeaders(token),
      data: data,
    })
      .then((response) => {
        if (!response.data) {
          alert("Data can't be submitted, please try again later");
        } else {
          alert("Data has been edited successfully");
        }
      })
      .catch((error) => console.log(error));
  };

export const addData = (data) => {
  return {
    type: "ADD_MASTER_SUPPLIER_DOCUMENT",
    payload: data,
  };
};

export const getAllData = (data) => {
  return {
    type: "GET_ALL_SUPPLIER_DOCUMENT",
    payload: data,
  };
};

export const getDataById = (data) => {
  return {
    type: "GET_DATA_BY_ID_SUPPLIER_DOCUMENT",
    payload: data,
  };
};

export const updateData = (data) => {
  return {
    type: "UPDATE_MASTER_SUPPLIER_DOCUMENT",
    payload: data,
  };
};
