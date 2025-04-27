import React from "react";

const Clients = () => {
  return (
    <div className="py-16 bg-white">
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl text-start py-10 font-semibold mb-10 text-blue-700">
          What our clients have to say
        </h2>

        {/* Cards */}
        <div className="h-100 grid md:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-blue-400 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="flex-1 flex items-center justify-center py-10">
                <button className="bg-blue-500 text-white rounded-full p-4">
                  ▶
                </button>
              </div>
              <div className="bg-blue-600 px-20 h-50 text-white text-left rounded-b-xl relative">
                <p className="text-lg font-light">
                  Holly is a <span className="font-semibold">senior executive</span> who got over <span className="font-semibold">10 job interviews</span> and an offer she accepted
                </p>
                <div className="absolute bottom-4 right-4">
                  <button className="bg-white text-blue-600 p-2 rounded-full">
                    ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="border border-blue-600 text-blue-600 rounded-full px-6 py-2 hover:bg-blue-50 transition">
            More customer testimonials ↗
          </button>
          <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition">
            Get Started →
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl text-start font-semibold mb-10">Why Choose Us?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-blue-400 rounded-xl p-6 text-center flex flex-col items-start gap-4">
            <div className="text-4xl">🤝</div>
            <h3 className="font-bold">Tried, Tested, Trusted</h3>
            <p className="text-sm text-start text-gray-600">
              Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-blue-400 rounded-xl p-6 text-center flex flex-col items-start gap-4">
            <div className="text-4xl">👤</div>
            <h3 className="font-bold">Real People, Real Help</h3>
            <p className="text-sm text-start text-gray-600">
              A hands-on team that actually cares — guiding you through every twist in your career path.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-blue-400 rounded-xl p-6 text-center flex flex-col items-start gap-4">
            <div className="text-4xl">⭐</div>
            <h3 className="font-bold">Beat the Line</h3>
            <p className="text-sm text-start text-gray-600">
              We search, shortlist, and apply for you, so your name shows up first every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
