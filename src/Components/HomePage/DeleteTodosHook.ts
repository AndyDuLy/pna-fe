import axios from "axios";

export const DeleteTodosHook = async (todoID: string) => {
  const res = await axios.delete(`https://rocky-shore-14548.herokuapp.com/todos/deleteTodo`, {
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
