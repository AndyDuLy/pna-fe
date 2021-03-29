import axios from "axios";
import { endpoints } from "./endpoints";


export const GetTodosHook = async () => {
  const res = await axios.get(`${endpoints.getTodos}`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
    params: {
      userid: `${localStorage.getItem("userID")}`
    }
  });

  return res;
}
