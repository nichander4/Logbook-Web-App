import axios from "axios";
import { API } from "constant";

export const login = async (data) => {
    const response = await axios({
        method: "POST",
        url: API + "/api/Authentication",
        data: data,
      });
    
      return response
}