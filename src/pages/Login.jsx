import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/styles.css"
import { useForumStore } from '../store';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, setUser } = useForumStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.length >= 6 && password.length >= 6) {
      login();
      setUser({ username, password });
      navigate('/forums');
    } else {
      alert("Both username and password must have at least six characters.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login">Login to your account</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
