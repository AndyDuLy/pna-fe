import axios from "axios";

export const DeleteTodosHook = async (todoID) => {
  const res = await axios.delete(`${process.env.REACT_APP_ENDPOINT}/todos/deleteTodo`, {
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
