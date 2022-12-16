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

// export const getAllIntern =
// async (pageNumber, pageSize, searchQuery) =>  {
//     try {
//       const header = getHeaders(store.getState().auth.token);
//       console.log(header, 'test header');

//       const response = await axios({
//         url: `https://53a9d0d0-5efc-4a8f-9d5c-bda74c8fa87e.mock.pstmn.io/api/RequestSourcing`, 
//         // url: `${API_URL}/api/User/Mentor`,
//         method: 'get',
//         headers: {
//           ...header,
//           'X-PAGINATION': true,
//           'X-PAGE': pageNumber,
//           'X-PAGESIZE': pageSize,
//           'X-SEARCH': `*${searchQuery}*`,
//           // 'X-FILTER': `roleId=3`
//         }
//       });

//       console.log(response.data, 'MASUK SINI');
//       // dispatch({ type: GET_ALL_INTERN, payload: response.data });
//       return response.data;
//     } catch (error) {
//       console.log(error, "ERR");
//       return error.response;
//     }
//   };

export const getAllIntern =
  (pageNumber, pageSize, searchQuery) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        // url: `${API_URL}/api/User`, 
        // url: `https://face-103-136-56-67.ap.ngrok.io/api/User`, 
        url: `https://53a9d0d0-5efc-4a8f-9d5c-bda74c8fa87e.mock.pstmn.io/api/RequestSourcing`, 
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
      dispatch({ type: GET_ALL_INTERN, payload: response.data });
      return response;
    } catch (error) {
      return error.response;
    }
  };

// export const getLTSampleById = (id) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_URL}/api/master/TargetLeadTimeSample/${id}`,
//       method: 'get',
//       headers: getHeaders(store.getState().auth.token)
//     });
//     dispatch({ type: GET_MASTER_LT_SAMPLE_BY_ID, payload: response.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const addLTSample = (data) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_URL}/api/master/TargetLeadTimeSample`,
//       method: 'post',
//       headers: getHeaders(store.getState().auth.token),
//       data
//     });
//     dispatch({ type: POST_MASTER_LT_SAMPLE, payload: response.data });

//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// export const updateLTSample = (data, id) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_URL}/api/master/TargetLeadTimeSample/${id}`,
//       method: 'put',
//       headers: getHeaders(store.getState().auth.token),
//       data
//     });
//     dispatch({ type: PUT_MASTER_LT_SAMPLE, payload: response.data });

//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// export const deleteLTSample = (id) => async (dispatch) => {
//   try {
//     const response = await axios({
//       url: `${API_URL}/api/master/TargetLeadTimeSample/${id}`,
//       method: 'delete',
//       headers: getHeaders(store.getState().auth.token)
//     });
//     dispatch({ type: DELETE_MASTER_LT_SAMPLE, payload: response.data });

//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };
