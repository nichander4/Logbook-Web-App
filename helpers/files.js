import axios from "axios";
import { API_FILES_URL } from "constant";
import { getHeaders, getFileUploadHeaders } from "helpers/utils";

export const deleteFiles = (id) => {
  return fetch(`${API_FILES_URL}/api/Files/${id}/hard`, {
    method: "DELETE",
    headers: getFileUploadHeaders(),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const deleteFile = async (id) => {
  try {
    const response = await axios({
      url: `${API_FILES_URL}/api/Files/${id}/hard`,
      method: "DELETE",
      headers: getFileUploadHeaders(),
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteMultipleFiles = async (data) => {
  try {
    const response = await axios({
      url: `${API_FILES_URL}/api/Files/hard`,
      method: "DELETE",
      headers: getFileUploadHeaders(),
      data,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const downloadFiles = (id) => {
  return fetch(`${API_FILES_URL}/api/Files/${id}/download`, {
    method: "GET",
    headers: getFileUploadHeaders(),
    responseType: "blob",
  })
    .then((response) => response.blob())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const downloadFile = async (id) => {
  try {
    const response = await axios({
      url: `${API_FILES_URL}/api/Files/${id}/download`,
      method: "GET",
      headers: getFileUploadHeaders(),
      responseType: "blob",
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
