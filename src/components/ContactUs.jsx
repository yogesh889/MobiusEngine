import React from "react";

const ContactUs = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-600  text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm uppercase tracking-wider">Still have doubts?</p>
            <h2 className="text-3xl font-bold mt-2">Contact us</h2>
          </div>

          {/* Button with arrow */}
          <div>
            <button className="bg-white text-blue-600 rounded-full p-4 flex items-center justify-center hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
