import React from "react";
import HeroImage from "../assets/HeroImage.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between mx-50 py-30">
      <div className="text-white pt-20">
        <h1 className="text-[80px]">Land job interviews<br/>10x faster</h1>
        <p>Custom-built resumes that match your goals, keywords, and <br />recruiter expectations.</p>
        <button>Get Started</button>
      </div>
      <img src={HeroImage} alt="heroimage" className="w-[301.2px] h-[389.99px]" />
    </div>
  );
};

export default HeroSection;
