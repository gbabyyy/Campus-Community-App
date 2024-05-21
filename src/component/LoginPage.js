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
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); 
    setApiError(''); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); 
    setApiError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setEmailError('Please enter your email.');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password.');
      return;
    }

    // Sending the form data as JSON string
    axios.post('https://api-flrming.dhoomaworksbench.site/api/student/user-login/', {
      password: password,
      email: email,
    })
      .then(res => {
        const access = res.data.access;
        const name =  res.data.name;
        console.log(res.data.access, 'ooo')
        // Store access token in local storage or context
        sessionStorage.setItem('accessToken', access);
        sessionStorage.setItem('userName', name);
        // Redirect to home page
        navigate('/home');
      })
      .catch(error => {
        // Display API error message
        setApiError('Invalid email or password.');
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
        <img src={logo} alt="logo" style={{ width: '200px', height: 'auto', marginBottom: '30px' }} />
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder='Email'
            value={email}
            onChange={handleUsernameChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div style={{ marginBottom: '25px' }}> {/* Add some margin between buttons */}
          <button className="btn btn-primary btn-lg" type="submit">Login</button>
        </div>
        <div className="additional-links mt-5">
          <span className="mb-5" style={{ color: 'white' }}>Don't have an account? <a href="/register" style={{ textDecoration: 'underline', color: 'white' }}>Register</a></span> <br></br>
          <a style={{ textDecoration: 'underline', color: 'white' }} href="/forgot-password">Forgotten Password?</a>
        </div>
        {apiError && <p className="error-message" style={{ color: 'white' }}>{apiError}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
