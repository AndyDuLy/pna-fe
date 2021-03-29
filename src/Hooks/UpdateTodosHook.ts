import axios from "axios";
import { endpoints } from "./endpoints";


export const UpdateTodosHook = async (title: string, category: string, content: string, colorCode: string, todoID: string) => {
  const res = await axios.put(`${endpoints.updateTodo}`,
  {
    title: title,
    category: category,
    content: content,
    todoID: todoID,
    colorCode: colorCode,
    userID: `${localStorage.getItem("userID")}`,
  },
  {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
  });

  return res;
}
