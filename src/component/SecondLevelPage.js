import React from 'react';
import './componentStyles/LevelsPage.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png';

const SecondLevelPage = () => {
    const location = useLocation();
    const buttonId = location.state?.buttonId;
    const navigate = useNavigate();
    const handleSubmit = () => {
        alert('Are You Finished the Task?');
        navigate('/levels');
    }
    return (
        <>
            {/* Header Section Start Here! */}
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
            {/* SecondLevel Section start Here  */}
            <div className="levels-page mt-5">
                <div className="container oval-container mt-5">
                    {/* TASK 4 Container start Here  */}
                    {buttonId === "TASK 4" && (
                        <div>
                            <h3>Question: LEVEL 4</h3>
                            <ul>
                                <li>Hint 1</li>
                                <li>Hint 2</li>
                                <li>Hint 3</li>
                                <li>Hint 4</li>
                            </ul>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
                            </div>
                        </div>
                    )}
                    {/* TASK 5 Container Start Here  */}
                    {buttonId === "TASK 5" && (
                        <div>
                            <h3>Question: LEVEL 5</h3>
                            <ul>
                                <li>Hint 1</li>
                                <li>Hint 2</li>
                                <li>Hint 3</li>
                                <li>Hint 4</li>
                            </ul>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
                            </div>
                        </div>
                    )}
                    {/* TASK 6 Container Start Here  */}
                    {buttonId === "TASK 6" && (
                        <div>
                            <h3>Question: LEVEL 6</h3>
                            <ul>
                                <li>Hint 1</li>
                                <li>Hint 2</li>
                                <li>Hint 3</li>
                                <li>Hint 4</li>
                            </ul>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
                            </div>
                        </div>
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

export default SecondLevelPage;
