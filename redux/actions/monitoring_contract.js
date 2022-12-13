import axios from "axios";
import { API_MONITORING_CONTRACT } from "constant";
import { getHeaders } from "helpers/utils";
import { GET_ALL_MONITORING_CONTRACT } from "redux/types";
import { store } from "redux/store";

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("|");

  return finalFilter;
};

export const fetchAllData = () => {
  return async (dispatch) => {
    const header = getHeaders(store.getState().auth.token);
    try {
      const response = await axios({
        url: `${API_MONITORING_CONTRACT}`,
        method: "get",
        headers: header,
      });

      dispatch({ type: GET_ALL_MONITORING_CONTRACT, payload: response });
    } catch (error) {
      console.log(error);
      // alert(error.message);
    }
  };
};

export const fetchData = (page = 1, pageSize = 5, search = "", filter = "") => {
  return async (dispatch) => {
    const header = getHeaders(store.getState().auth.token);
    try {
      const response = await axios({
        url: `${API_MONITORING_CONTRACT}`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": page,
          "X-PAGESIZE": pageSize,
          "X-FILTER": formatFilter(filter),
          "X-SEARCH": `*${search}*`,
          "X-ORDERBY": "createdDate desc",
        },
      });
      dispatch({ type: GET_ALL_MONITORING_CONTRACT, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      // alert(error.message);
    }
  };
};

export const exportExcelMC = async (user, page, pageSize, search, filter) => {
  try {
    const header = getHeaders(store.getState().auth.token);
    const response = await axios({
      method: "post",
      url: `${API_MONITORING_CONTRACT}/ExportExcel`,
      headers: {
        ...header,
        "X-PAGINATION": true,
        "X-PAGE": "1",
        // "X-PAGESIZE": pageSize,
        "X-FILTER": formatFilter(filter),
        "X-SEARCH": `*${search}*`,
      },
      responseType: "blob",
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const uploadExcel = async (id, name) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API_MONITORING_CONTRACT}/UploadExcel`,
      headers: getHeaders(store.getState().auth.token),
      data: {
        attachmentId: id,
        fileName: name,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const uploadFileMC = async (formData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API_FILES_STAGING_URL}/?applicationCode=KPARTNER&ModuleCode=Contract Lifecycle Management`,
      data: formData,
      headers: getHeaders(store.getState().auth.token),
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
