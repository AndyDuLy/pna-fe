import axios from "axios";

export const RegisterHook = async (name, email, password) => {
  const res = await axios.post(`https://rocky-shore-14548.herokuapp.com/auth/signup`,
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
