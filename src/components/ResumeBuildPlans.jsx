import React from "react";

const ResumeBuildPlans = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-start mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-2">
            Resume Building & Coaching
          </h2>
          <p className="text-gray-600 text-sm">
            Let’s talk about where you’re headed — and how your resume can get you there.<br/>
            Schedule a call to get started.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid h-150 p-10 md:grid-cols-2 gap-8">
          {/* Resume Rebuild Card */}
          <div className="border border-blue-400 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Resume Rebuild</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                $1000<span className="text-lg font-normal"> one time</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ 30-min coaching</li>
                <li>✅ Focused on storytelling, not just formatting</li>
                <li>✅ Analyst + full application team on Pacific hours</li>
                <li>✅ Tailored to your target industry, company, or role</li>
                <li>✅ Direct work with our co-founder (ex-Google, ex-Morgan)</li>
                <li>✅ Executive coaching from UC Berkeley alum with 10+ yrs experience</li>
                <li>✅ Resume Rebuild portfolio available upon request</li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white rounded-full py-2 px-6 mt-6 hover:bg-blue-700 transition">
              Get Started →
            </button>
          </div>

          {/* Interview Prep Card */}
          <div className="border border-blue-400 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Interview Prep</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                $500<span className="text-lg font-normal"> one time</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ 2× 45-min live coaching with our co-founder</li>
                <li>✅ Real-time, practical feedback</li>
                <li>✅ Build clarity, empathy, and presence</li>
                <li>✅ For senior and leadership roles — technical & non-technical</li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white rounded-full py-2 px-6 mt-6 hover:bg-blue-700 transition">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuildPlans;
