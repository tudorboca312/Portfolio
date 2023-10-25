import React from "react";

function CirclePhoto({ imagePath }) {
  return (
    <div
      className="h-photo w-photo bg-cover rounded-full sm:w-80 sm:h-80 md:h-96 md:w-96"
      style={{ backgroundImage: `url(${imagePath})` }}
    />
  );
}

export default CirclePhoto;
