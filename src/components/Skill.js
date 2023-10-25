import React, { useState } from "react";

function Skill({ content }) {
  const [isHovered, setIsHovered] = useState(false);
  const additionalInfo = (
    <div className="w-72 absolute bg-lightgray  p-6 ">
      <h1 className="text-xl pb-1 font-extrabold">{content.title}</h1>
      <h1 className="opacity-50">{content.description}</h1>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className=" mt-10 text-6xl h-16 text-lightpurple">
        {content.icon}
      </div>
      {isHovered && additionalInfo}
    </div>
  );
}

export default Skill;
