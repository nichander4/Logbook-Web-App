import axios from "axios";
import { API_FILES_URL } from "constant";
import { getHeaders } from "./utils";

export const getFileHelper = (token, attachmentFileId) => {
  // const userToken = getTokenCookie(req);

  //   return axios({
  //     url: `${API_FILES_URL}/api/Files/${attachmentFileId}/download`,
  //     method: "get",
  //     headers: getHeaders(token),
  //   })
  //     .then((response) => response.data.blob)
  //     .catch((error) => console.log(error));
  return fetch(`${API_FILES_URL}/api/Files/${attachmentFileId}/download`, {
    method: "GET",
    headers: getHeaders(token),
  })
    .then((response) => response.blob())
    .then((data) => data)
    .catch((error) => console.log(error));
};
