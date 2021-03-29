import axios from "axios";
import { endpoints } from "../../Hooks/endpoints";


export const LoginHook = async (email: string, password: string) => {
  const res = await axios.post(`${endpoints.login}`,
    {
      email,
      password
    },

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  return res;
}
