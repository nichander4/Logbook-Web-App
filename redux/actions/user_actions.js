import { API as API_URL } from 'constant';
import { getHeaders } from 'helpers/utils';
import axios from 'axios';
import { POST_USER, CHANGE_PASSWORD } from 'redux/types';
import { store } from 'redux/store';

export const addUser = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User`,
      method: 'post',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: POST_USER, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const changePassword = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/api/User/${id}`,
      method: 'put',
      headers: getHeaders(store.getState().auth.token),
      data
    });
    dispatch({ type: CHANGE_PASSWORD, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};
