import React from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [captainData, setUserData] = React.useState({});
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      setCaptainData({ email: email, password: password });
      setEmail('');
      setPassword('');
    }
  return (
 <div className='p-7 flex-col justify-between h-screen flex'>
      <div>
      <img className="w-20 mb-3"
          src="data:image/jpeg;base64,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REQEREBERAREQEREBERAREQEREBERAREQEREBFi3C40NspzU3Ksp6SAHHW1ErY257skrV/frpT4y2f8Ajo/7oN8i0P366U+Mtn/jo/7p9+ulPjLZ/wCOj/ug3yiTbjs/+7FG/Udogzcadn/yo2DjPEB77xc0e0eYBd79+ulPjLZ/46P+6ffrpT4y2f8Ajo/7oKlWG81tgu9NdLZL1dTTu3mk8nDtaR2gjgVbfRup6LVthgulAcb3kzQk5dDIObT/AC7wQVXba3ZLDRXn7paXudvqqKtcXSU9LUseaeTmcNBzunmOwcRw4LA2aa1qNF35s53pLdUEMrIQebexw/Wbkkd/EduUFtEXjR1UFdSQ1dJK2anmYHxyMOQ5pGQQvZAREQEREBERAREQEREBERAREQEREBERAREQQB0kKS5m922seyR1qbTdXG4AljJd4lwPcSNzz48FDavE5oc0tcAQeYIXn7mp/wBBF8gIKQorve5qf9BF8gJ7mp/0EXyAgpCiu97mp/0EXyAvl0FKxpc+KFrWjJJaAAEFI0Xf7Xdbs1TePcdsDWWiieREWjHXv5GQ+HYPDj24Xzsk0G/WF56+tY5too3A1DuXWu5iMHx7cch3ZCCXdgVNcafQY+6DZGwyVL5KNr/0RDeIHYC7ePrz2qSV8xxsijZHExrI2ANa1owGgcgAvpAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUJbdtoHVMk0pZ5TvuH/2EzDyB/wDED4/leHDtIUjbSb7Vab0VcrpQNBqYmtZG4jIYXuDd71b2fPhVKYypuFa1jBLUVdTLgDi58j3H2kklBsdJadrdVX2mtNvb5cpy+QjLYmD3z3eA+ckDmVbjTdjotN2WmtVtZuwQNxvH3z3drneJPFc9su0PDoyxBkwa+6VWH1co7D2MHgPnOT3AdogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiINbqWGKfT1zinjZJG6lkyx7QQfJPYVXjo/QxS6/DpY2PMdHI9hc0HddloyO44JHrREFmUREBERAREQEREBERAREQEREBERAREQEREBERB//2Q=="
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
        <p className='text-center'> Join a fleet? <Link to='/captainsignup' className='text-blue-600 '>Register as a Captaon</Link></p>

      </form>
      </div>
      <div>
        <Link to='/Login' className='flex item-centre justify-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link> 
      </div>
    </div>  )
};

export default CaptainLogin;