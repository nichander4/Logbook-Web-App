import { API as API_URL } from 'constant';
import { getHeaders } from 'helpers/utils';
import axios from 'axios';
import {
  GET_ALL_INTERN,
  GET_INTERN_BY_ID,
  POST_INTERN,
  PUT_INTERN,
  DELETE_INTERN
} from 'redux/types';
import { store } from 'redux/store';
import { useSession } from 'next-auth/react';

export const getAllIntern =
  async (pageNumber, pageSize, searchQuery) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      console.log(header, 'test header');

      const response = await axios({
        url: `${API_URL}/api/User`,
        method: 'get',
        headers: {
          ...header,
          'X-PAGINATION': true,
          'X-PAGE': pageNumber,
          'X-PAGESIZE': pageSize,
          'X-SEARCH': `*${searchQuery}*`,
          'X-FILTER': `roleName=Intern`
        }
      });

      console.log(response, 'MASUK SINI');
      // dispatch({ type: GET_ALL_INTERN, payload: response.data });
      return response;
    } catch (error) {
      console.log(error, "ERR");
      return error.response;
    }
  };

export const getLTSampleById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSample/${id}`,
      method: 'get',
      headers: getHeaders(store.getState().auth.token)
    });
    dispatch({ type: GET_MASTER_LT_SAMPLE_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addLTSample = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSample`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: POST_MASTER_LT_SAMPLE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateLTSample = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSample/${id}`,
      method: 'put',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: PUT_MASTER_LT_SAMPLE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteLTSample = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/master/TargetLeadTimeSample/${id}`,
      method: 'delete',
      headers: getHeaders(store.getState().auth.token)
    });
    dispatch({ type: DELETE_MASTER_LT_SAMPLE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
