import React from 'react';
import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom';
import LoginPage from './component/LoginPage';
import HomePage from './component/HomePage';
import LevelsPage from './component/LevelsPage';
import FirstLevelPage from './component/FirstLevelPage';
import SecondLevelPage from './component/SecondLevelPage';
import ThirdLevelPage from './component/ThirdLevelPage';
import CompletedPage from './component/CompletedPage';
import RegisterPage from './component/RegisterPage';
import ForgotPasswordPage from './component/ForgetPasswordPage';
import OtpVerificationPage from './component/OtpVerificationPage';
import RegistrationForm from './component/FlemmingRegisterPage';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/test" element={<RegistrationForm />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/levels" element={<LevelsPage />} />
        <Route path="/first-level" element={<FirstLevelPage />} />
        <Route path="/second-level" element={<SecondLevelPage />} />
        <Route path="/third-level" element={<ThirdLevelPage />} />
        <Route path="/completed" element={<CompletedPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/otp" element={<OtpVerificationPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
