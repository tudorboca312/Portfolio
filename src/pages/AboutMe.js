import React from "react";
import CirclePhoto from "../components/CirclePhoto";
import imagePath from "../photos/IMG_1568.jpeg";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-row px-4 md:px-0 md:ml-40 md:mr-40 mt-44 md:gap-32 items-center md:flex-col sm:flex-col"
    >
      <div className="mb-10 md:mb-0">
        <CirclePhoto imagePath={imagePath} />
      </div>
      <div className="flex flex-col gap-5 justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Tudor Mihai Boca
          <br />
          <span className="text-2xl">
            A Dynamic Web Developer with a Diverse Tech Foundation
          </span>
        </h1>
        <div className="font-regular">
          <h1>🌍 From Romania to the USA: A Journey in Tech</h1>
          <ul className="mb-8">
            <li>
              Age: <span className="opacity-50">25</span>
            </li>
            <li>
              Origin: <span className="opacity-50">Romania</span>
            </li>
            <li>
              Current Residence:{" "}
              <span className="opacity-50">United States of America</span>
            </li>
          </ul>

          <h1>
            👨‍💻 Professional Evolution: Service Desk to System Administration
          </h1>
          <ul className="mb-8">
            <li>
              Starting Point:{" "}
              <span className="opacity-50">
                Embarked on my tech career as a Service Desk Analyst, dedicating
                2 years and 1 month to developing customer support and technical
                troubleshooting skills.
              </span>
            </li>
            <li>
              Next Step:{" "}
              <span className="opacity-50">
                Advanced to a Junior System Administrator role, furthering my
                expertise in system management and optimization for 8 months.
              </span>
            </li>
          </ul>

          <h1>🇺🇸 New Beginnings: Diving into Web Development in the USA</h1>
          <ul className="mb-8">
            <li>
              Relocation:{" "}
              <span className="opacity-50">
                Moved to the USA, a pivotal moment that steered me towards
                exploring new career horizons.
              </span>
            </li>
            <li>
              Self-Taught Developer:{" "}
              <span className="opacity-50">
                In the past 2 years, I have fully immersed myself in learning
                web development, mastering technologies such as HTML, CSS,
                JavaScript, ReactJS, Redux, NodeJS, Tailwind CSS, Bootstrap,
                Python, and SQL.
              </span>
            </li>
          </ul>

          <h1>💻 Portfolio Creation: Showcasing Skills and Projects</h1>
          <ul className="mb-8">
            <li>
              Educational Pursuits:{" "}
              <span className="opacity-50">
                Completed various courses and learning paths, cementing my
                foundation in web development.
              </span>
            </li>
            <li>
              Project Showcase:{" "}
              <span className="opacity-50">
                Developed a personal portfolio, highlighting a range of projects
                that reflect my growing expertise and passion for innovative web
                solutions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
