import React from "react";

const ServicePlans = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-12">
          Job Application Service Plans
        </h2>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Plan Card */}
          <div className="h-150 px-15 pt-10 border border-blue-400 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">April Promo</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$35<span className="text-xl font-normal">/week</span></div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ Curated jobs from 1M+ listings, refreshed every 48 hours</li>
                <li>✅ Up to 20 human-applied roles per week</li>
                <li>✅ Add extra apps for just $1.5 each</li>
                <li>✅ Dedicated application analyst</li>
                <li>✅ Personalized with up to 10 filters & 5 job titles</li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white rounded-full py-2 px-6 mt-6 hover:bg-blue-700 transition">
              Get Started →
            </button>
          </div>

          {/* Starter Plan Card */}
          <div className="h-150 px-15 pt-10 border border-blue-400 rounded-xl p-6 flex flex-col justify-between relative">
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Popular
            </span>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$50<span className="text-xl font-normal">/week</span></div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ All perks of Promo Plan</li>
                <li>✅ Resume review & story-focused feedback</li>
                <li>✅ Dedicated search specialist</li>
                <li>✅ Up to 50 job apps/week</li>
                <li>✅ Analyst support within 6 hours</li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white rounded-full py-2 px-6 mt-6 hover:bg-blue-700 transition">
              Get Started →
            </button>
          </div>

          {/* Plus Plan Card */}
          <div className="h-150 px-15 pt-10 border border-blue-400 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Plus</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$100<span className="text-xl font-normal">/week</span></div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ Everything in Starter, plus:</li>
                <li>✅ Up to 75 apps/week</li>
                <li>✅ Apply to 15 job titles</li>
                <li>✅ Full application team support</li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white rounded-full py-2 px-6 mt-6 hover:bg-blue-700 transition">
              Get Started →
            </button>
          </div>
        </div>

        {/* Advance Plan (Special Section) */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Advance</h3>
            <ul className="text-sm space-y-2">
              <li>✅ Everything in Plus</li>
              <li>✅ Custom Resumes & Cover Letters</li>
              <li>✅ 20 fully customized applications/week</li>
              <li>✅ Help with complex job searches</li>
              <li>✅ Access to senior resume experts, Founder & Exec Coaches</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-4">$150<span className="text-xl font-normal">/week</span></div>
            <button className="bg-white text-blue-600 rounded-full py-2 px-8 font-bold hover:bg-gray-100 transition">
              Get Started →
            </button>
          </div>
        </div>
      </div>
      <hr className="w-280 ml-50 mt-30" />
    </section>
  );
};

export default ServicePlans;
