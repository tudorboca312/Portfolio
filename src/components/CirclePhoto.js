import React from "react";

function CirclePhoto({ imagePath }) {
  return (
    <div
      className="h-photo w-photo bg-cover rounded-full"
      style={{ backgroundImage: `url(${imagePath})` }}
    />
  );
}

export default CirclePhoto;
