import React from 'react';
import './componentStyles/LevelsPage.css';
import happyImage from '../assests/trophy.gif';
import logo from '../assests/logo.png';

const CompletedPage = () => {
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
                    <h2>TASK COMPLETED</h2>
                </div>
            </div>
            {/* Level Section Start Here! */}
            <div className="levels-page mt-5">
                <div className="container oval-container mt-5">
                    <img className="image-success" src={happyImage} alt="Happy" />
                    <h1 className="scan-header">YOU WIN!</h1>
                </div>
            </div>
            {/* Footer Section Start Here! */}
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.com, All Right Reserved</h3>
            </div></>
    );
};

export default CompletedPage;
