import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sending email and password data to server for processing and mailing
    if (username === "testemail@dal.ca" && password === "Test@123") {
      fetch("https://express-t4.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          navigate("/profiles");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setPasswordError("Email or Password is not correct.");
    }
  };

  const handleEmailChange = (event) => {
    setUsername(event.target.value);

    if (!event.target.value.trim()) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (!event.target.value.trim()) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>
            <label>Email</label>
          </p>
          <input
            type="email"
            id="email"
            value={username}
            onChange={handleEmailChange}
          />
          {emailError && <p className="login-error">{emailError}</p>}
          <p>
            <label>Password</label>
          </p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="login-error">{passwordError}</p>}

          <p class="link">Already have an account.Click here!</p>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
