import { API_REGISTER_SUPPLIER } from "constant";
import { getHeaders } from "helpers/utils";

export const getMyProfileSupplierByID = (id, token) => {
  return fetch(`${API_REGISTER_SUPPLIER}/${id}`, {
    method: "GET",
    headers: getHeaders(token),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const putMyProfileSuppliers = (data, token) => {
  return fetch(`${API_REGISTER_SUPPLIER}/${data.id}`, {
    method: "PUT",
    headers: getHeaders(token),
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
