import axios from "axios";
import { API_USER_PROFILE, API_USER_PROFILE_KEY } from "constant";
import { GET_ALL_USER_PROFILE, GET_USER_PROFILE_DETAIL } from "redux/types";

export const getAllUserProfile = (searchQuery) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_USER_PROFILE}/GetData/1/10?searchValue=${searchQuery}`,
      method: "get",
      headers: {
        apikey: API_USER_PROFILE_KEY,
      },
    });
    dispatch({ type: GET_ALL_USER_PROFILE, payload: response.data.data.items });
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfileDetail = (nik, clusterCode) => async (dispatch) => {
  try {
    console.log(nik, clusterCode);
    const response = await axios({
      url: `${API_USER_PROFILE}/GetByNIKCluster?NIK=${nik}&cluster=${clusterCode}`,
      method: "get",
      headers: {
        apikey: API_USER_PROFILE_KEY,
      },
    });
    dispatch({ type: GET_USER_PROFILE_DETAIL, payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};
