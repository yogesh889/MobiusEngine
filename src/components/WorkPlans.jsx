import React from "react";

const WorkPlans = () => {
  return (
    <div className="mt-30">
      <h1 className="text-[#0649E7] ml-60 font-bold text-2xl">How We Work?</h1>
      <div className="flex justify-center">
        <div className="p-10">
          <div className="relative border border-solid border-black rounded-full w-20">
            <h1 className="text-3xl font-bold mx-[9px] p-5">1</h1>
          </div>
          <span className="block w-50 h-px  bg-[#0649E7] my-5"></span>
          <h1 className="text-[#0649E7]">Submit Intake Form</h1>
        </div>

        <div className="p-10">
          <div className="relative border border-solid border-black rounded-full w-20">
            <h1 className="text-3xl font-bold mx-[9px] p-5">2</h1>
          </div>
          <span className="block w-50 h-px bg-[#0649E7]  my-5"></span>
          <h1 className="text-[#0649E7]">We do the search and <br />curation for list of jobs</h1>
        </div>

        <div className="p-10">
          <div className="relative border border-solid border-black rounded-full w-20">
            <h1 className="text-3xl font-bold mx-[9px] p-5">3</h1>
          </div>
          <span className="block w-50 h-px bg-[#0649E7] my-5"></span>
          <h1 className="text-[#0649E7]">You approve, we do the <br />tedious part (applying)</h1>
        </div>

        <div className="p-10">
          <div className="relative border border-solid border-black rounded-full w-20">
            <h1 className="text-3xl font-bold mx-[9px] p-5">4</h1>
          </div>
          <span className="block w-50 h-px bg-[#0649E7] my-5"></span>
          <h1 className="text-[#0649E7]">You get the interviews</h1>
        </div>
      </div>
    </div>
  );
};

export default WorkPlans;
