import { AUTH_URL } from "constant";

const headerAuthentication = new Headers();
headerAuthentication.append("Accept", "*/*");
headerAuthentication.append("Content-Type", "application/json");

export const submitLogin = (data) => {
  return fetch(`${AUTH_URL}/api/User/authenticate`, {
    method: "POST",
    headers: headerAuthentication,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
