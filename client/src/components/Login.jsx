import React, { useState } from "react";
import { Link, Navlink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = loginDetails;

    const res = await fetch("http://localhost:5000/authentication/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || res.status === 401 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login succesfull");
      navigate("/home");
    }
  };

  return (
    <div className="form-container">
      <h1>Start Your Journey !</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          value={loginDetails.username}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          value={loginDetails.password}
          onChange={handleChange}
        />
        <br></br>

        <button type="submit">Login</button>
        <p>New user ?</p>
        <Link to="/register">Register</Link>
      </form>
      <div>
        <br />
        <br />
        <br />
        <h3>Testing credentials</h3>
        <h4>username: test</h4>
        <h4>password: 1234</h4>
      </div>
    </div>
  );
};

export default Login;
