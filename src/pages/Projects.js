import React, { useState } from "react";
import { projects, extensions } from "../data/ProjectIndividual";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleHover = (title) => {
    setHoveredProject(title);
  };
  const handleExitHover = () => {
    setHoveredProject(null);
  };

  const renderProjects = projects.map((project) => {
    return (
      <div
        className="relative h-projectHeight w-projectWidth"
        key={project.title}
        onMouseEnter={() => handleHover(project.title)}
        onMouseLeave={handleExitHover}
      >
        {hoveredProject === project.title && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="flex flex-row gap-5">
              <section>
                <a
                  href={project.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" p-4 bg-projectTools hover:bg-hoverProject rounded-full "
                >
                  Go to GitHub
                </a>
              </section>
              {project.urlWebsite ? (
                <section>
                  <a
                    href={project.urlWebsite}
                    className=" p-4 bg-projectTools hover:bg-hoverProject rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Website
                  </a>
                </section>
              ) : null}
            </div>
          </div>
        )}
        <div
          id="projects"
          className="h-projectHeight w-projectWidth bg-lightBackgroundPurple rounded-2xl p-8 cursor-pointer"
          key={project.title}
        >
          <div className="flex flex-col justify-between gap-2 h-full">
            <div className="h-1/2">
              <h1 className="text-xl font-bold">{project.title}</h1>
              <p className="text-sm opacity-50">{project.description}</p>
            </div>
            <div className="h-1/2">
              <div className="flex gap-2 items-center justify-center">
                {project.tools[0].split(",").map((tool) => (
                  <span className="bg-projectTools rounded-full text-sm p-2 mb-4 w-52 font-semibold text-lightpurple flex items-center justify-center ">
                    {tool}
                  </span>
                ))}
              </div>
              <img
                src={project.photo}
                alt="project"
                className="w-full h-36 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  const renderExtensions = extensions.map((extension) => {
    return (
      <div
        className="relative h-projectHeight w-projectWidth"
        key={extension.title}
        onMouseEnter={() => handleHover(extension.title)}
        onMouseLeave={handleExitHover}
      >
        {hoveredProject === extension.title && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="flex flex-row gap-5">
              <section>
                <a
                  href={extension.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-projectTools hover:bg-hoverProject rounded-full"
                >
                  Go to GitHub
                </a>
              </section>
              {extension.urlWebsite ? (
                <section>
                  <a
                    href={extension.urlWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-projectTools hover:bg-hoverProject rounded-full"
                  >
                    Go to Website
                  </a>
                </section>
              ) : null}
            </div>
          </div>
        )}
        <div
          className="h-projectHeight w-projectWidth bg-lightBackgroundPurple hover:bg-hoverProject rounded-2xl p-8 cursor-pointer"
          key={extension.title}
        >
          <div className="flex flex-col justify-between gap-2 h-full">
            <div className="h-1/2">
              <h1 className="text-xl font-bold">{extension.title}</h1>
              <p className="text-sm opacity-50">{extension.description}</p>
            </div>
            <div className="h-1/2">
              <div className="flex gap-2 items-center justify-center">
                {extension.tools[0].split(",").map((tool) => (
                  <span
                    className="bg-projectTools rounded-full text-sm p-2 mb-4 w-52 font-semibold text-lightpurple flex items-center justify-center"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <img
                src={extension.photo}
                alt="project"
                className="w-full h-36 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-36 px-4 md:px-0 md:ml-40 md:mr-40">
      <section className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-5xl font-extrabold">Projects</h1>
        <div className="flex flex-row items-center text-xl font-semibold text-lightpurple gap-9 sm:mt-8 ">
          <div className="border border-lightPurple p-2 rounded-xl">
            Web Developing
          </div>
          <div className="border border-lightPurple p-2 rounded-xl">
            UI Design
          </div>
        </div>
      </section>
      <section
        id="excellent"
        className="flex flex-col items-center md:flex-row md:justify-center mt-24 overflow-x-scroll"
      >
        <div className="flex flex-wrap gap-14 md:gap-8 justify-center">
          {renderProjects}
        </div>
      </section>

      <h1 className="text-5xl font-extrabold mt-24">Live Extensions</h1>
      <section
        id="excellent"
        className="flex flex-col items-center md:flex-row md:justify-center mt-24 overflow-x-scroll"
      >
        <div className="flex flex-wrap gap-14 md:gap-8 justify-center">
          {renderExtensions}
        </div>
      </section>
    </div>
  );
}

export default Projects;
