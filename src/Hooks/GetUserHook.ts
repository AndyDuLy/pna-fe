import axios from "axios";
import { endpoints } from "./endpoints";


export const GetUserHook = async () => {
  const res = await axios.get(`${endpoints.getUser}`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
    params: {
      userid: `${localStorage.getItem("userID")}`
    }
  });

  return res;
}
