import axios from "axios";

export const LoginHook = async (email, password) => {
  const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`,
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
