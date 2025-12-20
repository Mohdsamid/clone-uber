import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import UserLogin from './pages/userLogin';
import UserSignIn from './pages/usersignin';
import CaptainLogin from './pages/Captainlogin';
import CaptainSignIn from './pages/Captainsignin';

const App = () => {
  return (
    <div>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Login" element={<UserLogin/>} />
     <Route path="/Signin" element={<UserSignIn/>} />
     <Route path="/CaptainLogin" element={<CaptainLogin/>} />
     <Route path="/CaptainSignin" element={<CaptainSignIn/>} />
    </Routes>
    </div>
  );
}

export default App;