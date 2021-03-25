import axios from "axios";

export const GetUserHook = async () => {
  const res = await axios.get(`https://rocky-shore-14548.herokuapp.com/auth/user`, {
    headers: {
      "Authorization": `${localStorage.getItem("token")}`,
    },
    params: {
      userid: `${localStorage.getItem("userID")}`
    }
  });

  return res;
}
