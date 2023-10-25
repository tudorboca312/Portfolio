import React from "react";

function Job({ job }) {
  let styling =
    "w-2/3 h-56 border border-lightPurple p-5 rounded-xl flex flex-col justify-between ";

  return (
    <div
      className={`${styling} ${
        job.title === "Web Developer" ? "bg-lightBackgroundPurple" : ""
      }`}
    >
      <div>
        <h1 className="font-bold text-xl mb-2">{job.title}</h1>
        <p className="font-regular text-base opacity-50 mb-4">
          {job.description}
        </p>
      </div>

      <div className="flex flex-row justify-between text-lightpurple">
        <p>{job.time}</p>
        <div className="flex flex-row gap-3 ">
          <p>{job.startDate.toLocaleDateString()}</p>-
          <p>{job.endDate ? job.endDate.toLocaleDateString() : "Present"}</p>
        </div>
      </div>
    </div>
  );
}

export default Job;
