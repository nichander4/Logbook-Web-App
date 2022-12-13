import axios from "axios";
import { API_SAMPLE_INTRODUCTION } from "constant";
import { getHeaders } from "helpers/utils";
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

export const fetchData = (page = 1, pageSize = 5, search = "", filter = "") => {
    return async (dispatch, getState) => {
      try {
        const header = getHeaders(store.getState().auth.token);
       
        const response = await axios({
          url: `${API_SAMPLE_INTRODUCTION}`,
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

        return response;
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const exportExcelSI = async ( page, pageSize, search, filter) => {
    try {
      const header = getHeaders(store.getState().auth.token);
      const response = await axios({
        method: "post",
        url: `${API_SAMPLE_INTRODUCTION}/Export`,
        headers: {
          ...header,
          "X-PAGINATION": true,
          "X-PAGE": page,
          "X-PAGESIZE": pageSize,
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