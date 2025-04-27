import React from "react";
import LOGO from "../assets/LOGO.png";

const Navbar = () => {
  return (
    <div className=" justify-between flex p-10 ">
      <img src={LOGO} alt="logoimage" className=" w-[250px] h-[49px]" />
      <div className="flex text-white ">
        <button className="px-10 cursor-pointer">Home</button>
        <button className="px-10 cursor-pointer">About</button>
        <button className="px-10 cursor-pointer">Plans</button>
        <button className="px-10 cursor-pointer">Testimonials</button>
        <button className="px-10 cursor-pointer">Privacy Policy</button>
        <button className="px-10 cursor-pointer">More</button>
        <button
          className="bg-white text-blue-700 border-2 border-blue-700 rounded-full px-6 py-2 font-semibold hover:bg-blue-100 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
