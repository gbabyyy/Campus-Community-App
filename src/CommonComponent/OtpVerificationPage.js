import React, { useState } from 'react';
import '../StyleComponent/OtpPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base64 from 'base-64';

const initialValues = {
    otp: ["", "", "", "", "", ""]
};

function OtpVerificationPage() {
    const location = useLocation();
    const email = location.state?.email || '';

    const [otp, setOtp] = useState(initialValues.otp);
    const [newPassword, setNewPassword] = useState('');

    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    };

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join('');
        const encodedPassword = base64.encode(newPassword);
        const apiEndpoint = 'http://127.0.0.1:8000/api/student/otp-reset-password/';
        const payload = {
            email: email,
            otp: otpString,
            password: encodedPassword  // Include the new password in the payload
        };

        try {
            const response = await axios.post(apiEndpoint, payload);
            // Handle success, maybe navigate to login page or show success message
            if (response.data.status === true && response.data.message === 'Password update Successfully') {
                navigate('/');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            // Handle error, maybe show an error message to the user
        }
    };

    return (
        <div className="wrapper">
            <div className="background-image"></div>
            <div className="gradient"></div>
            <form className="register-form" onSubmit={handleSubmit}>
                <h2 style={{ color: 'white' }}>Verify Your Account</h2>
                <p style={{ color: 'white' }}>Email: {email}</p>
                <div className="otp-inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            className="otp-input"
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="newPassword"
                        placeholder="Enter New Password"
                        value={newPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="otp-resend">Didn’t get the code? Resend</div>
                <button type="submit" className="submit-btn">
                    Verify Account
                </button>
            </form>
        </div>
    );
}

export default OtpVerificationPage;
