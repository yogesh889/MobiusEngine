import React from "react";
import Ashvin from "../assets/Ashvin.png";
import Nicole from "../assets/Nicole.png";

const About = () => {
  return (
    <section className="flex bg-gradient-to-b from-[#040C2C] to-[#082567] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12">About Us</h2>

        {/* First Person */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="relative w-40 h-40">
            <img
              src={Ashvin}
              alt="Ashwin"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <div className="max-w-2xl">
            <p className="text-white font-bold mb-2">Ashwin</p>
            <p className="text-gray-300 mb-4">
              Ashwin is the founder of mobiusengine.ai. He is an accomplished
              senior executive with over 20 years of experience in cloud
              infrastructure and financial services. With over 2 decades of
              experience at Google and JP Morgan, Ashwin held various product
              and GTM roles. Ashwin is an MBA holder from Yale University.
            </p>
            <p className="text-gray-300">
              Ashwin’s vision with Mobius is to give job seekers a significant
              advantage in securing the roles of their dreams.
            </p>
          </div>
        </div>

        {/* Second Person */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40">
            <img
              src={Nicole}
              alt="Nicole"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <div className="max-w-2xl">
            <p className="text-white font-bold mb-2">Nicole</p>
            <p className="text-gray-300 mb-4">
              Nicole is an Executive coach at Mobius specializing in resume
              builds and career advisory.
            </p>
            <p className="text-gray-300 mb-4">
              With a B.S. in Business Administration from UC Berkeley and 7+
              years of experience in AI-driven product strategy, she has seen
              firsthand how the proper positioning opens doors. She takes a
              targeted, results-driven approach to help clients confidently
              stand out and land roles that truly match their skills and
              potential.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 space-y-2">
          <a href="#" className="text-gray-300 hover:text-white underline">
            Learn more about our Board of Advisors →
          </a>
          <br />
          <a href="#" className="text-gray-300 hover:text-white underline">
            Follow us on our LinkedIn page →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
