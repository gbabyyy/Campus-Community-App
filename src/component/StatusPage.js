import React from 'react';
import './componentStyles/LevelsPage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png';

const StatusPage = () => {
    const savedName = sessionStorage.getItem('userName');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/levels');
    };

    return (
        <>
            <div className="header" style={{ padding: '30px' }}>
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="task-header">
                    <span className="home-level">Hello </span>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>{savedName}</span>
                </div>
            </div>
            <div className="levels-page mt-5">
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="text-center">
                        <h2 className="mb-4">Your Current Level</h2>
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item">Hint 1: This is the first hint.</li>
                            <li className="list-group-item">Hint 2: This is the second hint.</li>
                            <li className="list-group-item">Hint 3: This is the third hint.</li>
                            <li className="list-group-item">Hint 4: This is the fourth hint.</li>
                            <li className="list-group-item">Hint 5: This is the fifth hint.</li>
                        </ol>
                        <button className="btn btn-primary mt-4" onClick={handleSubmit}>Back to Levels</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
            </div>
        </>
    );
};

export default StatusPage;
