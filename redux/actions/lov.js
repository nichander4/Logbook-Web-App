import axios from 'axios';
import { API as API_URL } from 'constant';
import { getHeaders } from 'helpers/utils';
import { store } from 'redux/store';
import { GET_ROLE, GET_MENTOR, GET_INTERN_BY_MENTOR } from 'redux/types';

export const getAllRoles = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/Role`,
      method: 'get',
      headers: header,
    });
    dispatch({ type: GET_ROLE, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllMentor = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_URL}/api/User/Mentor`,
      method: 'get',
      headers: {
        ...header,
        'X-PAGINATION': false
        // 'X-PAGE': 1,
        // 'X-PAGESIZE': 1000,
        // 'X-SEARCH': `*${searchQuery}*`
        // 'X-FILTER': `roleId=3`
      }
    });

    dispatch({ type: GET_MENTOR, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getInternForMentor =
  (pageNumber, pageSize, searchQuery,id) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_URL}/api/User/Intern`,
        method: 'get',
        headers: {
          ...header,
          'X-PAGINATION': true,
          'X-PAGE': pageNumber,
          'X-PAGESIZE': pageSize,
          'X-SEARCH': `*${searchQuery}*`,
          'X-FILTER': `mentorId=${id}`
        }
      });
 
    dispatch({ type: GET_INTERN_BY_MENTOR, payload: response.data });
    return response;
  } catch (error) {
    return error.response;
  }
};
