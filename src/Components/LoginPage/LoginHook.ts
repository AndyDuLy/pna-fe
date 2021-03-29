import axios from "axios";

export const LoginHook = async (email: string, password: string) => {
  const res = await axios.post(`https://rocky-shore-14548.herokuapp.com/auth/login`,
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
