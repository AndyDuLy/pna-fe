import axios from "axios";

export const GetTodosHook = async () => {
  const res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/todos/getTodo`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
    params: {
      userid: `${localStorage.getItem("userID")}`
    }
  });

  return res;
}
