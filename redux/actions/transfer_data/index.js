import axios from "axios";
import { getHeaders } from "helpers/utils";
import { store } from "redux/store";
import {
    GET_ALL_TRANSFER_DATA,
    EXPORT_EXCEL_TRANSFER_DATA
  } from "redux/types";
import { setPageCount } from "redux/action/pagination";

export const getAllTransferData =  (
  pageNumber = 1,
  pageSize = 5,
  searchQuery = ""
) => async(dispatch) => {
  try {
    const headers = getHeaders(store.getState().auth.token);
    const response = await axios({
      url: "http://kpartner-transferdata-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/TransferData",
      method: "GET",
      headers: {
          ...headers,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
      }         
    });
    dispatch({ type: GET_ALL_TRANSFER_DATA, payload: response.data });
    dispatch(setPageCount(response.data.totalPage));
    return response.data;
    // return {
    //   type: "GET_ALL_TRANSFER_DATA",
    //   payload: {
    //     response: response.data,
    //   },
    // };
  } catch (error) {
    console.log(error);
  }
};

export const exportExcel =
  (search) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      const response = await axios({
        method: "POST",
        url: `http://kpartner-transferdata-development-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/TransferData/ExportExcel`,
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": "1",
          "X-SEARCH": `*${search}*`,
        },
        responseType: "blob",
      });
      dispatch({ type: EXPORT_EXCEL_TRANSFER_DATA, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };
