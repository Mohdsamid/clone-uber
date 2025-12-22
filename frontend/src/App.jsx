import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import UserLogin from './pages/userLogin';
import UserSignup from './pages/usersignup';
import CaptainLogin from './pages/Captainlogin';
import CaptainSignup from './pages/Captainsignup';

const App = () => {
  return (
    <div>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Login" element={<UserLogin/>} />
     <Route path="/Signin" element={<UserSignup/>} />
     <Route path="/CaptainLogin" element={<CaptainLogin/>} />
     <Route path="/CaptainSignin" element={<CaptainSignup/>} />
    </Routes>
    </div>
  );
}

export default App;