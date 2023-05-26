import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Login() {
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(error);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the fields");
    } else {
      try {
        await logIn(loginData.email, loginData.password);
        toast.success("Login Successfull");
        navigate("/home");
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
        console.log(error);
      }

      setLoginData({ email: "", password: "" });
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>
          Welcome Back, Please login <br /> to your account.
        </h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="login-field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="login-field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className="login-field">{/* <p>{errorMsg}</p> */}</div>
          <div className="login-field">
            <button>Login</button>
          </div>
          <div className="login-field">
            <p>
              Don't Have Account? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
