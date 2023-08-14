import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  onRegister: (username: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/register', {
        username,
        password,
      });
      console.log(response.data); 
 
      navigate("/login");

    } catch (error) {
      console.error('Registration error:', error);
    }

  };


  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="centered-content">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-danger" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
