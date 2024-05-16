import React from 'react';
import rectangleImage from '../assests/Rectangle 11.png'
import './componentStyles/LevelsPage.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Substract from '../assests/Subtract.png';
import frame from '../assests/Frame.png';
import frametrophy from '../assests/Frame2.png';
import logo from '../assests/logo.png';

const HomePage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/levels');
  }
  return (
    <>
      <div className="header" style={{padding: '30px'}}>
        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="task-header">
          <span className='home-level'> Hello </span>
          <span style={{color: 'white', fontWeight: 'bold'}}> Geemol Baby</span>
        </div>
      </div>
      <div className="levels-page mt-5">
        <div className="container mt-5">
          <div style={{ position: 'relative' }}>
            <img className="image-style" src={rectangleImage} alt="Rectangle" style={{ zIndex: '1', width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: '40px', left: '25px', color: 'white', zIndex: '2', fontWeight: 'bold' }}>Sutherland Campus</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ position: 'relative' }}>
              <img src={Substract} alt="Small Image" style={{ position: 'absolute', right: '4px', top: '5px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'yellow', padding: '5px' }} />
              <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', width: '250px', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer', fontWeight: 'bold', zIndex: '2' }}>Start Play</button>
            </div>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <button className="round-button" style={{ width: '100px', height: '100px', backgroundColor: 'white', padding: '10px', border: 'none', cursor: 'pointer', marginRight: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={frame} alt="Left Image" style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
              <span style={{ color: 'black', textAlign: 'center' }}>Hint</span>
            </button>
            <button className="square-button" style={{ width: '100px', height: '100px', backgroundColor: 'white', padding: '10px', border: 'none', cursor: 'pointer', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={frametrophy} alt="Right Image" style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
              <span style={{ color: 'black', textAlign: 'center' }}>Status</span>
            </button>
          </div>

        </div>
      </div>
      <div className="footer">
        <h3 className="footer-heading">Copy@ 2024 fleming.com, All Right Reserved</h3>
      </div>
    </>
  );
};

export default HomePage;
