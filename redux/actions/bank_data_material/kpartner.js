import axios from "axios";
import { API_SUPPLIER_MANAGEMENT_URL } from "constant";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
  DELETE_BANK_DATA_MATERIAL_KPARTNER,
  GET_ALL_BANK_DATA_MATERIAL_KPARTNER,
  GET_BANK_DATA_MATERIAL_BY_ID_KPARTNER,
  POST_BANK_DATA_MATERIAL_KPARTNER,
  PUT_BANK_DATA_MATERIAL_KPARTNER,
} from "redux/types";

export const getAllBankDataMaterial =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_SUPPLIER_MANAGEMENT_URL}/api/Catalogue`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
        },
      });
      dispatch({
        type: GET_ALL_BANK_DATA_MATERIAL_KPARTNER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getBankDataMaterialByID = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUPPLIER_MANAGEMENT_URL}/api/Catalogue/${id}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    console.log(response, "respact");
    dispatch({
      type: GET_BANK_DATA_MATERIAL_BY_ID_KPARTNER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postBankDataMaterial = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUPPLIER_MANAGEMENT_URL}/api/Catalogue`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({
      type: POST_BANK_DATA_MATERIAL_KPARTNER,
      payload: response.data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const putBankDataMaterial = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUPPLIER_MANAGEMENT_URL}/api/Catalogue/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({
      type: PUT_BANK_DATA_MATERIAL_KPARTNER,
      payload: response.data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteBankDataMaterial = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_SUPPLIER_MANAGEMENT_URL}/api/Catalogue/${id}`,
      method: "delete",
      headers: getHeaders(store.getState().auth.token),
    });
    dispatch({
      type: DELETE_BANK_DATA_MATERIAL_KPARTNER,
      payload: response.data,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
