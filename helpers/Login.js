import axios from "axios";
import { API } from "constant";

const headerAuthentication = new Headers();
headerAuthentication.append("Accept", "*/*")
headerAuthentication.append("Content-Type", "application/json");

// export const login = async (data) => {
//     console.log(headerAuthentication);
//     const https = require('https');
//     const agent = new https.Agent({  
//         rejectUnauthorized: false
//       });

//     const response = await axios({
//         method: "POST",
//         url: API + "/api/Authentication",
//         // url: "https://dummyjson.com/auth/login",
//         headers: headerAuthentication,
//         data: data,
//         httpAgent: agent
//       });

//       console.log(response);
    
//       return response.data
// }

export const login = (data) => {
    return fetch(`${API}/api/Authentication`, {
      method: "POST",
      headers: headerAuthentication,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  };

//   export const login = (data) => {
//     return fetch(`https://dummyjson.com/auth/login`, {
//       method: "POST",
//       headers: headerAuthentication,
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => data)
//       .catch((error) => console.log(error));
//   };