import React, { useState } from "react";
import { Redirect } from "react-router";

import { RouteComponentProps } from "react-router-dom";

import { RegisterHook } from "./RegisterHook";


interface Props {
  history: RouteComponentProps['history'],
}

const RegisterPage: React.FC<Props> = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await RegisterHook(name, email, password);

      if (res.status === 201) {
        props.history.push("/login");
        alert("Account created successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (localStorage.getItem("token")) return <Redirect to="/" />
  
  return (
    <div className="login-canvas">
      <h3 className=""> Register </h3>

      <input
        className="input-fields"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      /> <br />

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
        Register
      </button> <br />

      <button className="auth-redirect-button" onClick={() => props.history.push("/login")}>
        Have an  <span className="hyperlink-text"> account? </span>
      </button>
    </div>
  );
};

export default RegisterPage;
