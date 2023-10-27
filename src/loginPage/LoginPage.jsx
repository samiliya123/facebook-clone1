import React from 'react'
import './loginPage.css'

const LoginPage = () => {
  return (
    <div className='login'>
        <div className="facebook">
            <div className="facebook-text">
                <h1>facebook</h1>
            </div>
            <div className="title">
                <p>Facebook helps you connect and share <br /> with the people in your life.</p>
            </div>
        </div>
        <div className="login-container">
            <div className="login-details">
                <input type="email" placeholder='Email address or phone number' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <button className='btn'>
                    Login
                </button>
            </div>
            <div className="forget">
                <a href="forget">Forgotten password?</a>
                <br />
                <button className='btns'></button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage