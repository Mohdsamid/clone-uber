import React from "react";
import Logo from "../assets/uber.png";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full pt-8 flex justify-between flex-col bg-red-400">
        <img className="w-15 ml-10"
          src={Logo}
          alt="Uber Logo"
        />
        <div className="bg-white py-4 pb-7 px-4">
          <h1 className="text-3xl font-bold">Get Started With Uber</h1>
          <button className="w-full bg-black text-white py-3 rounded mt-5">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
