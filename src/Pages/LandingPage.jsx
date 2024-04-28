import React from 'react'
import  "../Styles/LandingPage.css";
import LoginForm from '../Components/LoginForm';
const LandingPage = () => {
  return (
    <div className='landing-page'>
        <div className="landing-page-left-section"></div>
        <div className="landing-page-right-section">
            
            <div className="login-form-container">
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default LandingPage