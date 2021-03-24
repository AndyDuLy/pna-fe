import React, { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";


const LoginPage = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { REACT_APP_ENDPOINT } = process.env;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setData({ ...data });
      
      const res = await axios.post(`${REACT_APP_ENDPOINT}/auth/login`,
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

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.user._id);
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (localStorage.getItem("token")) return <Redirect to="/" />

  return (
    <div className="login-canvas">
      <h3 className=""> Log In </h3>

      <input
        className="input-fields"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      /> <br />

      <input
        className="input-fields"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      /> <br />

      <button className="logout-button" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
