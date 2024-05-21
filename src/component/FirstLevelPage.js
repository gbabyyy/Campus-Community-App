import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png';
import './componentStyles/LevelsPage.css'; // Import CSS file for styling

const FirstLevelPage = () => {
  const location = useLocation();
  const buttonId = location.state?.buttonId;
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const finalAnswer = 'A';

  useEffect(() => {
    const isAdminLocalStorage = localStorage.getItem('isAdmin');
    if (isAdminLocalStorage === 'true') {
      setIsAdmin(true);
      setIsEditable(true);
    }
  }, []);

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    if (isEditable) {
      setSelectedOption(event.target.value);
    }
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    // Now, the selected radio button value is stored in the selectedOption state variable
    console.log('Selected option:', selectedOption);
    if (selectedOption !== finalAnswer) {
      // Show an alert message for wrong answer
      alert('It\'s a wrong answer!');
    }
    else {
      navigate('/levels');
    }
  };

  const handleUpdate = () => {
    // Perform update action here
    console.log('Form Updated!');

  };

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
      {/* started content section  */}
      <div className="levels-page mt-5">
        <div className="container oval-container mt-5">
          {/* TASK 1 Container Start Here  */}
          {buttonId === "TASK 1" && (
            <div>
              <form>
              <h3>Question: LEVEL 1</h3>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="A" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  A
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="B" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  B
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="C" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  C
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="D" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  D
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {isEditable ? (
                  <button onClick={handleUpdate} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Update</button>
                ) : (
                  <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
                )}
              </div>
              {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
              </div> */}
              </form>
            </div>
          )}
          {/* TASK 2 Container  Start Here  */}
          {buttonId === "TASK 2" && (
            <div>
              <h3>Question: LEVEL 2</h3>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="A" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  A
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="B" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  B
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="C" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  C
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="D" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  D
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
              </div>
            </div>
          )}
          {/* TASK 3 Container Start Here! */}
          {buttonId === "TASK 3" && (
            <div>
              <h3>Question: LEVEL 3</h3>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="A" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  A
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="B" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  B
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="C" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  C
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div className="firstlevel-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rounded-button" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ABC9C', borderRadius: '20px', padding: '10px' }}>
                  <input type="radio" name="options" value="D" style={{ marginRight: '5px' }} onChange={handleRadioChange} />
                  D
                </div>
                <div className="span" style={{ marginLeft: '10px' }}>
                  <span>Text</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={handleSubmit} className="submit-button" style={{ backgroundColor: '#3498db', color: '#fff', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Check Your Answer</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section Start Here! */}
      <div className="footer">
        <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
      </div></>
  );
};

export default FirstLevelPage;
