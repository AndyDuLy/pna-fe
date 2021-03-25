import axios from "axios";

export const UpdateTodosHook = async (title, category, content, todoID) => {
  const res = await axios.put(`${process.env.REACT_APP_ENDPOINT}/todos/updateTodo`,
  {
    title: title,
    category: category,
    content: content,
    todoID: todoID,
    userID: `${localStorage.getItem("userID")}`,
  },
  {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
  });

  return res;
}
