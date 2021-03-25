import axios from "axios";

export const UpdateTodosHook = async (title, category, content, todoID) => {
  const res = await axios.put(`https://rocky-shore-14548.herokuapp.com/todos/updateTodo`,
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
