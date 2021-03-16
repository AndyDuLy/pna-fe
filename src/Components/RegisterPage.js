import React, { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";


const RegisterPage = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setData({ ...data });

      await axios.post("http://localhost:5000/auth/signup",
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

      props.history.push("/login");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
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
      </button>
    </div>
  );
};

export default RegisterPage;
