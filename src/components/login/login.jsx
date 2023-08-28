import React, { useState } from 'react';
import "./login.css";

const LoginComponent = ({ show, onClose }) => {
  const [message, setMessage] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const savedUser = localStorage.getItem(username);

    if (savedUser && JSON.parse(savedUser).password === password) {
      showMessage("Login successful!");
    } else {
      showMessage("Incorrect credentials.");
    }
  };

  const handleRegister = () => {
    const regName = document.getElementById("regName").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;

    if (!localStorage.getItem(regEmail)) {
      const newUser = {
        name: regName,
        email: regEmail,
        password: regPassword
      };
      localStorage.setItem(regEmail, JSON.stringify(newUser));
      showMessage("Registration successful! You can now log in.");
      onClose(); // Cerrar la ventana de login
    } else {
      showMessage("User with this email already exists.");
    }
  };

  const handleClose = () => {
    onClose(); // Cerrar la ventana de login
  };

  return (
    <div className="login-container" id="loginContainer">
      <div className="login-box" id="loginBox" style={{ display: show ? "block" : "none" }}>
        <h2>Login</h2>
        <form id="loginForm">
          <input type="text" id="username" placeholder="Username" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="button" id="loginButton" className="btn" onClick={handleLogin}>
            Login
          </button>
          <button type="button" id="registerButton" className="btn" onClick={handleRegister}>
            Register
          </button>
          <button type="button" id="closeButton" className="btn" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
      <div className="register-box" id="registerBox" style={{ display: show ? "none" : "block" }}>
        <h2>Register</h2>
        <form id="registerForm">
          <input type="text" id="regName" placeholder="Name" required />
          <input type="email" id="regEmail" placeholder="Email" required />
          <input type="password" id="regPassword" placeholder="Password" required />
          <button type="button" id="registerSubmit" className="btn" onClick={handleRegister}>
            Register
          </button>
          <button type="button" id="backToLogin" className="btn" onClick={() => onClose()}>
            Back to Login
          </button>
        </form>
      </div>
      <div id="messageBox">
        <p id="message">{message}</p>
      </div>
    </div>
  );
};

export default LoginComponent;
