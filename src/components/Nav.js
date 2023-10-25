import React from "react";

function Nav() {
  const navButtons = [
    "Home",
    "Skills",
    "About",
    "Projects",
    "Experience",
    "Contact",
  ];
  const content = navButtons.map((element) => {
    return (
      <a
        key={element}
        href={`#${element.toLowerCase()}`}
        className="hover:text-lightpurple opacity-50"
      >
        {element}
      </a>
    );
  });

  return (
    <div className="flex space-x-4 items-center cursor-pointer">{content}</div>
  );
}

export default Nav;
