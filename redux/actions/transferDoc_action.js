import { API_TRANSFER_DOC as API_URL } from 'constant';
import { getHeaders } from 'helpers/utils';
import axios from 'axios';
import {
  GET_ALL_TRANSFER_DOCUMENT,
  GET_TRANSFER_DOCUMENT,
  POST_TRANSFER_DOCUMENT,
  PUT_TRANSFER_DOCUMENT,
  DELETE_TRANSFER_DOCUMENT,
  EXPORT_TRANSFER_DOCUMENT,
  SUBMIT_TRANSFER_DOCUMENT,
  APPROVE_TRANSFER_DOCUMENT,
  RECEIVE_TRANSFER_DOCUMENT,
  REVISE_TRANSFER_DOCUMENT,
  FEEDBACK_RECEIVER_TRANSFER_DOCUMENT,
  FEEDBACK_SOURCING_SPV_TRANSFER_DOCUMENT
} from 'redux/types';
import { store } from 'redux/store';

export const getAllTransferDoc =
  (pageNumber = 1, pageSize = 5, searchQuery = '') =>
  async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/TransferDocument`,
        method: 'get',
        headers: {
          ...header,
          'X-PAGINATION': true,
          'X-PAGE': pageNumber,
          'X-PAGESIZE': pageSize,
          'X-SEARCH': `*${searchQuery}*`,
          //   "X-ORDERBY": "createdDate desc",
          'X-SEARCHFIELD': `transferDocNo|referenceType|referenceNo|manufacturingSite|category|function|materialName|materialCode|manufacturerName|supplierName|projectCategory|createdDate|createdByName|statusText|receiveDate`
        }
      });
      dispatch({ type: GET_ALL_TRANSFER_DOCUMENT, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getTransferDocById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/${id}`,
      method: 'get',
      headers: getHeaders(store.getState().auth.token)
    });

    dispatch({ type: GET_TRANSFER_DOCUMENT, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addTransferDoc = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: POST_TRANSFER_DOCUMENT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateTransferDoc = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/${id}`,
      method: 'put',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: PUT_TRANSFER_DOCUMENT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteTransferDoc = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/${id}`,
      method: 'delete',
      headers: getHeaders(store.getState().auth.token)
    });
    dispatch({ type: DELETE_TRANSFER_DOCUMENT, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const exportTransferDoc = (searchQuery) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/TransferDocument/ExportExcel`,
      method: 'post',
      headers: {
        ...header,
        'X-PAGINATION': true,
        'X-SEARCH': `*${searchQuery}*`,
        'X-SEARCHFIELD': `transferDocNo|referenceType|referenceNo|manufacturingSite|category|function|materialName|materialCode|manufacturerName|supplierName|projectCategory|createdDate|createdByName|statusText|receiveDate`
      },
      responseType: 'blob'
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const submitTransferDoc = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/submit/${id}`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data: data
    });
    dispatch({ type: SUBMIT_TRANSFER_DOCUMENT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const reviseTransferDoc = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/Revise/${id}`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data: data
    });
    dispatch({ type: REVISE_TRANSFER_DOCUMENT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const receiveTransferDoc = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/receive/${id}`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data: data
    });
    dispatch({ type: RECEIVE_TRANSFER_DOCUMENT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const approveTransferDoc = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/TransferDocument/approve/${id}`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data: data
    });
    dispatch({ type: APPROVE_TRANSFER_DOCUMENT, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

