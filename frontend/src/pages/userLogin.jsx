import React from 'react';
import Logo from "../assets/uber.png";
import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <div className='p-7 flex-col justify-between h-screen flex'>
      <div>
      <img className="w-16 mb-10"
          src={Logo}
          alt="Uber Logo"
        />
      <form >
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
        <input className='bg-[#eeeeee] mb-7 border rounded px-4 w-full py-2 text-lg placeholder:text-base ' required placeholder='email@example.com' type="email" />
        <h3 className='text-lg font-medium  mb-2'>Enter Your Password</h3>
        <input className='bg-[#eeeeee] mb-7 border rounded px-4 w-full py-2 text-lg placeholder:text-base ' required type="password" placeholder='Password' />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>Login</button>
                <p className='text-center'> New Here? <Link to='/signup' className='text-blue-600 '>Create An Account</Link></p>

      </form>
      </div>
      <div>
        <button className='bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</button> 
      </div>
    </div>
  );
};

export default UserLogin;