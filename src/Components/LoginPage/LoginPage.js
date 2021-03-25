import React, { useState } from "react";
import { Redirect } from "react-router";

import { LoginHook } from "./LoginHook";


const LoginPage = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await LoginHook(email, password);
      
      console.log(res);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.user._id);
        props.history.push("/");
      } else {
        alert("Auth Failed. Check credentials");
      }
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
      </button> <br />

      <button className="auth-redirect-button" onClick={() => props.history.push("/register")}>
        Need an  <span className="hyperlink-text"> account? </span>
      </button>
    </div>
  );
};

export default LoginPage;
