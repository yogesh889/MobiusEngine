import React from "react";
import BlueLogo from "../assets/BlueLogo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src={BlueLogo} alt="MobiusEngine" className="h-10 mb-4" />
        </div>

        {/* Address */}
        <div>
          <h4 className="text-blue-600 font-medium mb-2">Address</h4>
          <p>1875 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-blue-600 font-medium mb-2">Email</h4>
          <a href="mailto:finance@mobiusengine.ai" className="text-blue-600 hover:underline">
            finance@mobiusengine.ai
          </a>
        </div>

        {/* Telephone + Social */}
        <div>
          <h4 className="text-blue-600 font-medium mb-2">Telephone</h4>
          <a href="tel:6508896026" className="text-blue-600 hover:underline block mb-4">
            650-889-6026
          </a>
          <h4 className="text-blue-600 font-medium mb-2">Socials</h4>
          <div className="flex gap-3">
            <a href="#" className="border border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition">
              in
            </a>
            <a href="#" className="border border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition">
              in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className="bg-blue-600 text-white mt-12 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">&copy; 2023 MobiusServices LLC</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
