import { API as API_URL } from 'constant';
import { getHeaders } from 'helpers/utils';
import axios from 'axios';
import {
  GET_ALL_MENTOR,
  GET_MENTOR_BY_ID,
  POST_MENTOR,
  PUT_MENTOR,
  DELETE_MENTOR
} from 'redux/types';
import { store } from 'redux/store';

export const getAllMentor =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/User/Mentor`,
        method: 'get',
        headers: {
          ...header,
          'X-PAGINATION': true,
          'X-PAGE': pageNumber,
          'X-PAGESIZE': pageSize,
          'X-SEARCH': `*${searchQuery}*`
          // 'X-FILTER': `roleId=3`
        }
      });
      console.log(response.data, 'MASUK SINI');
      dispatch({ type: GET_ALL_MENTOR, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getMentorById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: 'get',
      headers: getHeaders(store.getState().auth.token)
    });
    dispatch({ type: GET_MENTOR_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};



export const updateMentor = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: 'put',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: PUT_MENTOR, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMentor = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: 'delete',
      headers: getHeaders(store.getState().auth.token)
    });
    dispatch({ type: DELETE_MENTOR, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
