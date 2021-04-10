import axios from "axios";

import { endpoints } from "./endpoints";


export const CreateTodosHook = async (title: string, category: string, content: string, categoryColor: string, done: boolean) => {
  const res = await axios.post(`${endpoints.createTodo}`,
    {
      title: title,
      category: category,
      content: content,
      done: done,
      categoryColor: categoryColor,
      userID: `${localStorage.getItem("userID")}`,
    },

    {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
  });

  return res;
}
