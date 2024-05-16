import React, { useState, useEffect } from 'react';
import './componentStyles/RegisterPage.css';
import logo from '../assests/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contact_number: '',
        password: '',
        campus: ''
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [campus, setCampus] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleCampusChange = (e) => {
        setCampus(e.target.value);
    }

    // const handleSubmit = async e => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post('https://api-flrming.dhoomaworksbench.site/api/student/', {

    //                 password: password,
    //                 email: email,
    //                 contact_number: phoneNumber,
    //                 student_code: "null"
    //         });

    //         console.log('Registration successful:', response.data);
    //         // Add any necessary logic for successful registration
    //     } catch (error) {
    //         console.error('Registration failed:', error);
    //         // Handle registration error
    //     }
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Sending the form data as JSON string
        axios.post('https://api-flrming.dhoomaworksbench.site/api/student/', {
            password: password,
            email: email,
            contact_number: phoneNumber,
            student_code: "null"
        })
            .then(res => {
                console.log(res.data)
                navigate('/');
            })
            .catch(error => {
                console.log(error, 'error');
            });
    };

    return (
        <div className="wrapper">
            <div className="background-image"></div>
            <div className="gradient"></div>
            <form className="register-form">
                <img className="register-logo" src={logo} alt="logo" />
                <div className="form-group">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        // className="input-with-icon"
                        placeholder="Enter Your Username"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        // className="input-with-icon"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="form-group">
                    {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group" >
                    {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
                    <input
                        style={{ backgroundColor: 'red' }}
                        type="text"
                        id="campus"
                        placeholder="Campus"
                        value={campus}
                        onChange={handleCampusChange}
                    />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary btn-lg" type="submit">SUBMIT</button>
            </form>
        </div>
    );
}

export default RegisterPage;
