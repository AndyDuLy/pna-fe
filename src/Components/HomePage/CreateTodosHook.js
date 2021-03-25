import axios from "axios";

export const CreateTodosHook = async (title, category, content) => {
  const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/todos/newTodo`,
    {
      title: title,
      category: category,
      content: content,
      userID: `${localStorage.getItem("userID")}`,
    },

    {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
  });

  return res;
}
