import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCriate from './LoginCriate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
    return (
        <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCriate />} />     
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />     
        </Routes> 
        </div>
    )
}

export default Login
