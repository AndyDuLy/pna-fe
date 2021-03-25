import axios from "axios";

export const GetUserHook = async () => {
  const res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/auth/user`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
    params: {
      userid: `${localStorage.getItem("userID")}`
    }
  });

  return res;
}
