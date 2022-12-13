import {API_CHANGE_PIC as API_URL } from "constant";
import { getHeaders } from "helpers/utils";
import axios from "axios";
import {
    GET_ALL_DOCUMENT_CREATOR_LIST,
    GET_DOCUMENT_APPROVAL,
    POST_CHANGE_PIC,
  } from "redux/types";

import { store } from "redux/store";

export const getAllDocumentApprover =
  (pageNumber, pageSize, searchQuery, userName) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      
      const response = await axios({
        url: `http://kpartner-workflow-feature-change-pic-kf-asd-kpartner-dev.apps.alpha.kalbe.co.id/api/Approval/incomplete?userName=${userName}`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-SEARCHFIELD": `docNo|workflow.subModuleName|workflow.moduleName|workflow.status`,
        },
      });

      console.log(response, "MASUK SINI");
      dispatch({ type: GET_DOCUMENT_APPROVAL, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };



export const saveChangePIC = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/DocumentPic/change`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_CHANGE_PIC, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};


export const getAllDocumentCreator =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      
      const response = await axios({
        url: `${API_URL}/api/DocumentPic/creator`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-SEARCHFIELD": `docNumber|subModuleName|moduleName|docStatus`,
        },
      });

      console.log(response, "MASUK SINI");
      dispatch({ type: GET_ALL_DOCUMENT_CREATOR_LIST, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };


