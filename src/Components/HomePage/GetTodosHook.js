import axios from "axios";

export const GetTodosHook = async () => {
  const res = await axios.get(`https://rocky-shore-14548.herokuapp.com/todos/getTodo`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
    params: {
      userid: `${localStorage.getItem("userID")}`
    }
  });

  return res;
}
