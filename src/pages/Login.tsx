import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


interface LoginProps {
  onLogin: (value: boolean) => void;
  loginStatus:boolean,
}

const Login: React.FC<LoginProps> = ({ onLogin,loginStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });
      console.log(response.data); 
      if(response.data.auth){
        onLogin(true);

        localStorage.setItem("token",response.data.token);
        navigate("/codecell");

  
      }else{
        onLogin(false);

      }
     
    } catch (error) {
      console.error('Login error:', error);
    }

    
  };

  const userAuthenticated = () =>{

    axios.get("http://localhost:8080/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}}).then((response)=> localStorage.setItem("data",JSON.stringify(response)));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="button" className="btn btn-danger" onClick={handleLogin}>
          Login
        </button>
    
      </form>
    </div>
  );
};

export default Login;
