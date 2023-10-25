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
      className="border-t border-b border-lightBorderPurple flex flex-col items-center px-4 md:px-0"
    >
      <div className="pt-24 pb-24 flex flex-col items-center w-full md:ml-40 md:mr-40">
        <ul className="flex flex-row gap-6 justify-center mb-6 text-xl bg-lightBackgroundPurple w-52 h-11 items-center rounded-full">
          <li>🧑‍💻 Skills</li>
          <li className="list-disc">Experience</li>
        </ul>
        <h1 className="font-extrabold text-5xl text-center">
          Technologies and Skills
        </h1>
        <div className="flex flex-col items-center mt-10 md:mt-40">
          <p className="text-xl md:text-2xl font-light opacity-50 text-center">
            Technologies used everyday
          </p>
          <div className="flex flex-wrap justify-center gap-9">
            {renderMainSkills}
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-40">
          <p className="text-xl md:text-2xl font-light opacity-50 text-center">
            Other Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-9">
            {renderOtherSkills}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
