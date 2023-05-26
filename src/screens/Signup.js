import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Signup() {
  const [registerData, setRegisterData] = useState({
    userName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { signUp } = useUserAuth();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegisterData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !registerData.firstName ||
      !registerData.lastName ||
      !registerData.email ||
      !registerData.password
    ) {
      toast.error("Please Fill All the Fields");
    } else {
      try {
        await signUp(registerData.email, registerData.password);
        toast.success("Accout created successfully");
        navigate("/");
      } catch (err) {
        setErrorMsg(err.message);
        toast.error(err.message);
        console.log(err.message);
      }

      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="signup">
      <div className="form-container">
        {/* <h1>Sign Up</h1> */}
        <h1>Create Account</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="field-container">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={registerData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={registerData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={registerData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create Password"
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <p>{errorMsg}</p>
          </div>
          <div className="field-container">
            <button>Sign Up</button>
          </div>
          <div className="field-container">
            <p>
              Already Have Account? <Link to="/">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
