import axios from "axios";

export const RegisterHook = async (name, email, password) => {
  const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/signup`,
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
