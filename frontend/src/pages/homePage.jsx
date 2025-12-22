import React from "react";
import Logo from "../assets/uber.png";
import bgImage from "../assets/bgp.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full bg-cover bg-center pt-8 flex justify-between flex-col" style={{ backgroundImage: `url(${bgImage})` }} >
        <img className="w-16 ml-10"
          src={Logo}
          alt="Uber Logo"
        />
        <div className="bg-white py-4 pb-7 px-4">
          <h1 className="text-3xl font-bold">Get Started With Uber</h1>
          <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
