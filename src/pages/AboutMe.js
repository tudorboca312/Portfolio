import React from "react";
import CirclePhoto from "../components/CirclePhoto";
import imagePath from "../photos/IMG_1568.jpeg";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex md:flex-row ml-40 mr-40 mt-44 gap-64 sm:flex-col sm:items-center"
    >
      <div>
        <CirclePhoto imagePath={imagePath} />
      </div>
      <div className="flex flex-col flex-wrap gap-5 justify-center">
        <h1 className="text-6xl font-extrabold">Tudor Mihai Boca</h1>
        <div className="font-regular">
          <p className="inline-flex space-x-2 mb-8">
            <span>👋</span>
            <span className="opacity-50">
              Hello! I'm Tudor Mihai Boca, but feel free to call me Tudor.
              Pleasure to connect!
            </span>
          </p>
          <p className="inline-flex space-x-2 mb-1">
            <span>👨‍💻</span>
            <span className="opacity-50">
              I embarked on my web development journey in Romania, transitioning
              into the tech sphere with roles in Technical Customer Service,
              Junior System Administration, and ServiceNow Development over
              three consecutive years. Since relocating to the USA in 2023, my
              self-taught web development skills have found a new focal point.
              I'm driven by a knack for problem-solving and a strong desire to
              contribute to a collaborative team, striving for project success
              and efficiency.
            </span>
          </p>
          <p className="inline-flex space-x-2 mb-8">
            <span>💡</span>
            <span className="opacity-50">
              Having spent a year each as a Service Desk Analyst and Junior
              System Administrator, I developed a blend of customer-centric and
              technical skills. This background equips me to navigate intricate
              tech landscapes while ensuring superior customer satisfaction and
              operational efficiency.
            </span>
          </p>
          <p className="inline-flex space-x-2">
            <span>🚀</span>{" "}
            <span className="opacity-50">
              As I step into the web development scene in a corporate world, I'm
              pumped to put my diverse skill set to work, aiming for fresh and
              effective web solutions. My portfolio, showcasing a variety of
              projects and Google Chrome extensions, is a peek into my growing
              expertise and the excitement I bring to the coding table.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
