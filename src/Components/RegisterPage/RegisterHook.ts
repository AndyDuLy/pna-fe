import axios from "axios";
import { endpoints } from "../../Hooks/endpoints";


export const RegisterHook = async (name: string, email: string, password: string) => {
  const res = await axios.post(`${endpoints.register}`,
    {
      name,
      email,
      password
    },

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res;
}
