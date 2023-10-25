import React from "react";
import { jobs } from "../data/jobInformation";
import Job from "../components/Job";

function Journey() {
  const renderEachJob = jobs.map((job) => {
    return <Job job={job} key={job.title} />;
  });

  return (
    <div
      id="experience"
      className="w-2/4 m-auto flex flex-col items-center mt-36"
    >
      <p className="bg-lightBackgroundPurple rounded-full p-3 mb-6">
        💼 Carrear
      </p>
      <h1 className="font-extrabold text-6xl mb-16">My Journey</h1>
      <p className="text-3xl font-extrabold mb-20">Experience</p>
      <div className="flex flex-col items-center gap-20">{renderEachJob}</div>
    </div>
  );
}

export default Journey;
