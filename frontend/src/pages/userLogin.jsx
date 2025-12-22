import React from 'react';
import Logo from "../assets/uber.png";
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userData, setUserData] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    setUserData({ email: email, password: password });
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex-col justify-between h-screen flex'>
      <div>
      <img className="w-16 mb-10"
          src={Logo}
          alt="Uber Logo"
        />
      <form onSubmit={(e)=>{handleSubmit(e)}} >
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

        <input value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }} 
        className='bg-[#eeeeee] mb-7 border rounded px-4 w-full py-2 text-lg placeholder:text-base '
         required placeholder='email@example.com' type="email" 
         />
        
        <h3 className='text-lg font-medium  mb-2'>Enter Your Password</h3>
        <input value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }} className='bg-[#eeeeee] mb-7 border rounded px-4 w-full py-2 text-lg placeholder:text-base ' required 
        type="password" placeholder='Password' />

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>Login</button>
        <p className='text-center'> New Here? <Link to='/signup' className='text-blue-600 '>Create An Account</Link></p>

      </form>
      </div>
      <div>
        <Link to='/captainlogin' className='flex item-centre justify-center bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</Link> 
      </div>
    </div>
  );
};

export default UserLogin;