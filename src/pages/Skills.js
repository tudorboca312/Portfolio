import React, { useMemo } from "react";
import Skill from "../components/Skill";
import { mainSkills } from "../data/skillObject";

// Function to render skills based on the 'main' property
const renderSkills = (skills, main) => {
  return skills
    .filter((skill) => skill.main === main)
    .map((skill, index) => (
      <div key={skill.title}>
        <Skill content={skill} />
      </div>
    ));
};

function Skills() {
  // Use useMemo to memoize the rendered skills
  const renderMainSkills = useMemo(() => renderSkills(mainSkills, true), []);
  const renderOtherSkills = useMemo(() => renderSkills(mainSkills, false), []);

  return (
    <div
      id="skills"
      className="border-t border-b border-lightBorderPurple flex flex-col items-center "
    >
      <div className="ml-40 mr-40 pt-24 pb-24 flex flex-col items-center ">
        <ul className="flex flex-row gap-6 justify-center mb-6 text-xl bg-lightBackgroundPurple w-52 h-11 items-center rounded-full">
          <li>🧑‍💻 Skills</li>
          <li className="list-disc">Experience</li>
        </ul>
        <h1 className="font-extrabold text-5xl">Technologies and Skills</h1>
        <div className="flex flex-col items-center">
          <p className="mt-40 text-2xl font-light opacity-50">
            Technologies used everyday
          </p>
          <div className="flex flex-row gap-9 ">{renderMainSkills}</div>
        </div>
        <div className="flex flex-col items-center">
          <p className="mt-40 text-2xl font-light opacity-50">
            Other Technologies
          </p>
          <div className="flex flex-row gap-9 ">{renderOtherSkills}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
