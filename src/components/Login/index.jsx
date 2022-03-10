import React from 'react';
import { useLogin } from './hook';
import './index.css'

const Login = () => {
    
    const {
        phoneNumber,
        handlePhoneNumberChange,
        onSubmit
    } = useLogin();

    return (
        <div className="form">
            <input
                className="loginItem"
                type="text"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            <button
                className="loginItem"
                onClick={onSubmit}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
