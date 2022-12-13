import axios from "axios";
import {
  API_BID_RESPONSE,
  API_MASTER_STAGING_URL,
  API_FILES_URL,
  API_COMMENTS_DEV,
  API_COMMENT_URL,
} from "constant";
import { getHeaders } from "helpers/utils";
import { setPageCount } from "redux/action/pagination";
import { store } from "redux/store";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import {
  GET_ALL_BID_RESPONSE,
  PUT_BID_RESPONSE,
  GET_BID_RESPONSE_BY_ID,
  DELETE_BID_RESPONSE,
  POST_BID_RESPONSE,
  PUT_APPROVAL_BID_RESPONSE,
  POST_COMMENT,
  POST_NOTIFICATION,
  DELETE_FILE_BID_RESPONSE_BY_ID,
  POST_EXPORT_EXCEL,
} from "redux/types";
const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};
// export const getBidResponse =
//   (pageNumber, pageSize, searchQuery) => async (dispatch) => {
//     try {
//       const header = getHeaders(store.getState().auth.token);

//       const response = await axios({
//         url: `${API_BID_RESPONSE}/api/BidResponse`,
//         method: "get",
//         headers: {
//           ...header,
//           "X-PAGINATION": true,
//           "X-PAGE": pageNumber,
//           "X-PAGESIZE": pageSize,
//           "X-SEARCH": `*${searchQuery}*`,
//         },
//       });

//       dispatch({ type: GET_ALL_BID_RESPONSE, payload: response.data });
//       dispatch(setPageCount(response.data.totalPage));
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const getBidResponse =
  (
    pageNumber = 1,
    pageSize = 5,
    searchQuery = "",
    filter = "",
    startDate = "",
    endDate = ""
  ) =>
  async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_BID_RESPONSE}/api/BidResponse`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": pageNumber,
          "X-PAGESIZE": pageSize,
          "X-SEARCH": `*${searchQuery}*`,
          "X-FILTER": formatFilter(filter),
          "X-ORDERBY": "createdDate desc",
          "CSTM-STARTDATE": startDate,
          "CSTM-ENDDATE": endDate,
        },
      });

      dispatch({ type: GET_ALL_BID_RESPONSE, payload: response.data });
      dispatch(setPageCount(response.data.totalPage));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

export const getAllBidResponse = () => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);
    const response = await axios({
      url: `${API_BID_RESPONSE}/api/BidResponse`,
      method: "get",
      headers: {
        ...header,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBidResponseById = (id, noDoc) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);

    const response = await axios({
      url: `${API_BID_RESPONSE}/api/BidResponse/${id}`,
      method: "get",
      // headers: getHeaders(store.getState().auth.token),
      headers: {
        ...header,
        "X-DOCNO": noDoc ?? "",
      },
    });
    // console.log(response);
    return response.data;
    // dispatch({ type: GET_BID_RESPONSE_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const postBidResponse = (data) => async (dispatch) => {
  let formObject = Object.fromEntries(data.entries());
  // console.log(formObject);
  console.log(data);

  // try {
  //   // const response = await axios({
  //   //   url: `${API_BID_RESPONSE}/api/BidResponse`,
  //   //   method: "post",
  //   //   headers: getHeaders(store.getState().auth.token),
  //   //   data,
  //   // });
  //   // dispatch({ type: POST_BID_RESPONSE, payload: response.data });

  //   // return response;
  // } catch (error) {
  //   return error.response;
  // }
};

export const putBidResponse = (data, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BID_RESPONSE}/api/BidResponse/${id}`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: PUT_BID_RESPONSE, payload: response.data });
    // alert("Success Save");

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteBidResponse = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BID_RESPONSE}/api/BidResponse/Close`,
      method: "put",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: DELETE_BID_RESPONSE, payload: response.data });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteFile = async (id) => {
  try {
    const response = await axios({
      url: `${API_FILES_URL}/api/Files/${id}/hard`,
      headers: getHeaders(store.getState().auth.token),
      method: "delete",
    });
    dispatch({ type: DELETE_FILE_BID_RESPONSE_BY_ID, payload: response.data });
    return response;
    // return response;
  } catch (error) {
    alert(error);
    return error.response;
  }
};

export const putApprovalBidResponse =
  (data, approvalType) => async (dispatch) => {
    try {
      console.log(data);
      const response = await axios({
        url: `${API_BID_RESPONSE}/api/BidResponse/Approval/${approvalType}`,
        method: "put",
        headers: getHeaders(store.getState().auth.token),
        data,
      });

      dispatch({ type: PUT_APPROVAL_BID_RESPONSE, payload: response.data });
      // alert("Success Submit");
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const postComment = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_COMMENTS_DEV}/api/comment`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    //dispatch({ type: POST_COMMENT, payload: response.data });
    // alert("berhasil");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getComment = (responseNumber) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);
    const response = await axios({
      url: `${API_COMMENTS_DEV}/api/comment`,
      method: "get",
      headers: {
        ...header,

        "X-FILTER":
          "systemCode=KPartner|moduleCode=EC-BidResponse|documentNumber=" +
          responseNumber,
        "X-PAGINATION": "true",
        "X-PAGESIZE": "100",
        "X-ORDERBY": "createdDate desc",
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const getComment2 = (docno) => async (dispatch) => {
  try {
    const header = getHeaders(store.getState().auth.token);
    const response = await axios({
      url: `${API_COMMENTS_DEV}/api/comment${docno}`,
      method: "get",
      headers: getHeaders(store.getState().auth.token),
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const exportExcel = async (user) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API_BID_RESPONSE}/api/BidResponse/ExportExcel/?actorEmail=${user.email}&actorName=${user.name}`,
      headers: getHeaders(store.getState().auth.token),
      //responseType: 'blob',
    });
    // alert("berhasil export")

    //FileSaver.saveAs(data, fileName + fileExtension);
    //return FileSaver.saveAs(response.data, "BidResponseExport" + fileExtension);
  } catch (error) {
    return error.response;
  }
};
export const exportExcel2 =
  (data, page, pageSize, search, filter) => async (dispatch) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      const response = await axios({
        method: "post",
        url: `${API_BID_RESPONSE}/api/BidResponse/ExportExcel`,
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": "1",
          //  "X-PAGESIZE": pageSize,
          "X-FILTER": formatFilter(filter),
          "X-SEARCH": `*${search}*`,

          // responseType: "blob",
        },

        data,
        responseType: "blob",
      });
      // alert("berhasil export")
      dispatch({ type: POST_EXPORT_EXCEL, payload: response.data });
      return response;
    } catch (error) {
      //  console.log(error.response);
      return error.response;
    }
  };
// export const exportExcel2 = (data) => async (dispatch) => {
//   try {
//     const header = getHeaders(store.getState().auth.token);
//     const response = await axios({
//       method: "post",
//       url: `${API_BID_RESPONSE}/api/BidResponse/ExportExcel`,
//       headers: {
//         headers: {
//           ...header,

//         },
//       //  responseType: "blob",
//       },

//       data,
//       //responseType: 'blob',
//     });
//     // alert("berhasil export")
//     dispatch({ type: POST_EXPORT_EXCEL, payload: response.data });
//     return response;
//   } catch (error) {
//     //  console.log(error.response);
//     return error.response;
//   }
// };
export const postNotification = (data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BID_RESPONSE}/api/BidResponse/ReminderNotification`,
      method: "post",
      headers: getHeaders(store.getState().auth.token),
      data,
    });
    dispatch({ type: POST_NOTIFICATION, payload: response.data });
    // alert("berhasil kirim notifikasi");
    return response;
  } catch (error) {
    return error.response;
  }
};
export const deleteFileBidRes = async (id) => {
  try {
    const response = await axios({
      url: `${API_FILES_URL}/api/Files/${id}/hard`,
      headers: getHeaders(store.getState().auth.token),
      method: "delete",
    });
    return response;
    // return response;
  } catch (error) {
    // alert(error);
    return error.response;
  }
};
