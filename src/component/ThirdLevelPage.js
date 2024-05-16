import React, { useState } from 'react';
import './componentStyles/LevelsPage.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import logo from '../assests/logo.png';

const ThirdLevelPage = () => {
    const location = useLocation();
    const buttonId = location.state?.buttonId;
    const [qrResult, setQrResult] = useState('');

    const handleScan = data => {
        if (data) {
            setQrResult(data);
        }
    };

    const handleError = err => {
        console.error(err);
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/completed');
    }
    return (
        <>
            {/* Header Section Start Here */}
            <div className="header">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="home-level">
                        <span>Home</span> |
                        <span className="level-heading">Levels</span>
                    </div>
                </div>
                <div className="task-header">
                    <h2>{buttonId}</h2>
                </div>
            </div>
            {/* QR Code Section Start Here!  */}
            <div className="levels-page mt-5">
                <div className="container oval-container mt-5">
                    {/* TASK 7 Container Start Here  */}
                    {buttonId === "TASK 7" && (
                        <>
                            <h1 className="scan-header">SCAN ME</h1>
                            <QrReader
                                delay={500}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: '100%' }}
                            />
                            <p>{qrResult}</p>
                            <p className="scan-header">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </>
                    )}
                    {/* TASK 8 Container Start Here!  */}
                    {buttonId === "TASK 8" && (
                        <>
                            <h1 className="scan-header">SCAN ME</h1>
                            <QrReader
                                delay={500}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: '100%' }}
                            />
                            <p>{qrResult}</p>
                            <p className="scan-header">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </>
                    )}
                    {/* TASK 9 Container Start Here  */}
                    {buttonId === "TASK 9" && (
                        <>
                            <h1 className="scan-header">SCAN ME</h1>
                            <QrReader
                                delay={500}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: '100%' }}
                            />
                            <p>{qrResult}</p>
                            <p className="scan-header">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </>
                    )}
                    {/* TASK 10 Container Start Here */}
                    {buttonId === "TASK 10" && (
                        <>
                            <h1 className="scan-header">SCAN ME</h1>
                            <QrReader
                                delay={500}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: '100%' }}
                            />
                            <p>{qrResult}</p>
                            <p className="scan-header">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Finish</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* Footer Section Start Here! */}
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.com, All Right Reserved</h3>
            </div>
        </>
    );
};

export default ThirdLevelPage;
