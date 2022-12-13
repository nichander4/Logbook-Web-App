import axios from "axios";
import { API_REQUEST_FORECAST } from "constant";
import { getHeaders } from "helpers/utils";
import { setPageCount } from "./pagination";
import { store } from "redux/store";

export const storeData = (data) => {
  return {
    type: "STORE_DATA",
    payload: data,
  };
};

export const resetError = () => {
  return {
    type: "ERROR_DATA",
    payload: "",
  };
};

export const fetchAllDataErr = (error) => {
  return {
    type: "ERROR_DATA",
    payload: error,
  };
};

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
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    await axios
      .get(
        `${API_REQUEST_FORECAST}`,
        {
          headers: {
            AppAuthorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(storeData(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const fetchData = (page = 1, pageSize = 5, search = "", filter = "", startDate = "", endDate = "") => {
  return async (dispatch, getState) => {
    try {
      const header = getHeaders(store.getState().auth.token);

      const response = await axios({
        url: `${API_REQUEST_FORECAST}`,
        method: "get",
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": page,
          "X-PAGESIZE": pageSize,
          "X-FILTER": formatFilter(filter),
          "X-SEARCH": `*${search}*`,
          "X-ORDERBY": "createdDate desc",
          "CSTM-STARTDATE": startDate,
          "CSTM-ENDDATE": endDate,
        },
      });
      dispatch(storeData(response.data));
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const cancelRequest = async (item, id, reasonText) => {
  try {
    const response = await axios({
      method: "put",
      url: `${API_REQUEST_FORECAST}/${id}`,
      headers: getHeaders(store.getState().auth.token),
      data: {
        ...item,
        noRequest: item.noRequest,
        genericName: item.genericName,
        periodeStart: item.periodeStart,
        periodeEnd: item.periodeEnd,
        itemContracts: item.itemContracts,
        cancelReason: reasonText,
        status: "INACTIVE",
        statusGeneral: "",
        id: id,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const submitRequest = async (item, id, periode_start, periode_end) => {
  try {
    const response = await axios({
      method: "put",
      url: `${API_REQUEST_FORECAST}/Approval/submit`,
      headers: getHeaders(store.getState().auth.token),
      data: {
        ...item,
        noRequest: item.noRequest,
        genericName: item.genericName,
        periodeStart: periode_start,
        periodeEnd: periode_end,
        itemContracts: item.itemContracts,
        statusGeneral: "",
        cancelReason: "",
        id: id,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const saveRequest = async (item, id, periode_start, periode_end) => {
  console.log(`${API_REQUEST_FORECAST}/${id}`);
  try {
    const response = await axios({
      method: "put",
      url: `${API_REQUEST_FORECAST}/${id}`,
      headers: getHeaders(store.getState().auth.token),
      data: {
        ...item,
        noRequest: item.noRequest,
        genericName: item.genericName,
        periodeStart: periode_start,
        periodeEnd: periode_end,
        status: "Open",
        statusGeneral: "Open",
        itemContracts: item.itemContracts,
        id: id,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const approveRequest = async (item, id) => {
  try {
    const response = await axios({
      method: "put",
      url: `${API_REQUEST_FORECAST}/Approval/approve`,
      headers: getHeaders(store.getState().auth.token),
      data: {
        ...item,
        noRequest: item.noRequest,
        genericName: item.genericName,
        periodeStart: item.periodeStart,
        periodeEnd: item.periodeEnd,
        itemContracts: item.itemContracts,
        id: id,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const rejectRequest = async (item, id, reasonText) => {
  try {
    const response = await axios({
      method: "put",
      url: `${API_REQUEST_FORECAST}/Approval/reject`,
      headers: getHeaders(store.getState().auth.token),
      data: {
        ...item,
        noRequest: item.noRequest,
        genericName: item.genericName,
        periodeStart: item.periodeStart,
        periodeEnd: item.periodeEnd,
        itemContracts: item.itemContracts,
        id: id,
        cancelReason: reasonText,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
