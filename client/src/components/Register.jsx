import React, { useState } from "react";

import { Link, Navlink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password, confirmPassword } = user;

    const res = await fetch("http://localhost:5000/authentication/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration succesfull");
      navigate("/");
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
          value={user.username}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <br></br>
        <button tupe="submit">Register</button>
        <p>Already registerd ?</p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
