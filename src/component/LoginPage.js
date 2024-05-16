import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './componentStyles/LoginPage.css';
import logo from '../assests/logo.png';
import './componentStyles/RegisterPage.css';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending the form data as JSON string
    axios.post('https://api-flrming.dhoomaworksbench.site/api/student/user-login/', {
      password: password,
      email: email,
    })
      .then(res => {
        console.log(res.data.access, 'p')
        const { access } = res.data.access;
        // Store access token in local storage or context
        localStorage.setItem('accessToken', access);
        localStorage.setItem('isAdmin', 'false');
        // Redirect to home page
        navigate('/home');
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };
  const handleAdminLogin = () => {
    // Perform admin login action here
    // For example, you can set specific admin credentials and perform login
    localStorage.setItem('isAdmin', 'true');
    navigate('/levels');
  };

  return (
    <div className="wrapper">
      <div className="background-image"></div>
      <div className="gradient"></div>
      <form onSubmit={handleSubmit} className="register-form">
        <h2 style={{ color: 'white' }}>Login To Your Account</h2>
        <img src={logo} alt="logo" />
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder='Email'
            value={email}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}> {/* Add some margin between buttons */}
          <button className="btn btn-primary btn-lg" type="submit">Login As Student</button>
        </div>
        <div> {/* Add some margin between buttons */}
          <button className="btn btn-primary btn-lg" onClick={handleAdminLogin}>Login as Admin</button>
        </div>

        {/* ?<button className="btn btn-primary btn-lg" type="submit"><a href="/home">Login</a></button> */}
        <div className="additional-links mt-5">
          <span className="mb-5" style={{ color: 'white' }}>Don't have an account?<a href="/register">Register</a></span> <br></br>
          <a href="/forgot-password">Forgotten Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
