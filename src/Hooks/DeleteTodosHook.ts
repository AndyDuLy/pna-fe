import axios from "axios";
import { endpoints } from "./endpoints";


export const DeleteTodosHook = async (todoID: string) => {
  const res = await axios.delete(`${endpoints.deleteTodo}`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },

    data: {
      userID: `${localStorage.getItem("userID")}`,
      todoID: `${todoID}`,
    },
  });

  return res;
}
