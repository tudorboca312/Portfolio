import React from "react";
import Nav from "../components/Nav";
import { VscGithubInverted } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsDownload, BsWhatsapp } from "react-icons/bs";
import CirclePhoto from "../components/CirclePhoto";
import imagePath from "../photos/Profile.jpg";
import LinkComponent from "../components/LinkComponent";

function Landing() {
  let myName = "<TudorBoca />";

  return (
    <div id="home" className="flex flex-col items-center px-4 md:px-0 lg:px-16">
      <div className="w-full bg-lightgray h-16 text-lg md:flex justify-end pr-11 sm:hidden ">
        <Nav />
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row mt-24 md:mx-40 lg:mx-20 mb-40 w-full sm:items-center sm:gap-10">
        <section className="flex-1 order-2 md:order-1 lg:order-1 mb-10 md:mb-0 lg:mb-0">
          <div className="text-center sm:text-left lg:text-left pl-20">
            <p className="text-xl w-40 h-11 bg-lightBackgroundPurple rounded-full mx-auto sm:mx-0 flex items-center justify-center font-extrabold">
              👋 Hello!
            </p>

            <p className="text-5xl font-extrabold mt-6">{myName}</p>
            <ul className="flex flex-row gap-6 font-light mt-4 justify-center sm:justify-start">
              <li>Web Developer</li>
              <li className="list-disc">UI Design</li>
            </ul>
            <div className="mt-6 flex flex-row gap-3 justify-center sm:justify-start">
              <LinkComponent
                styles="cursor-pointer"
                text={<VscGithubInverted className="h-8	w-8" />}
                linkPath={"https://github.com/tudorboca312"}
              />
              <LinkComponent
                styles="cursor-pointer"
                text={<TiSocialLinkedinCircular className="h-8	w-8" />}
                linkPath={"https://www.linkedin.com/in/tudor-boca-4626a5197/"}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center flex-1 order-1 md:order-2 lg:order-2 mb-10 md:mb-0 lg:mb-0">
          <CirclePhoto imagePath={imagePath} />
        </section>

        <section className="flex flex-col justify-start items-center flex-1 md:flex-col lg:flex-col text-lightpurple md:gap-2 lg:gap-2 pt-10 order-3 md:order-3 lg:order-3 sm:flex-row sm:gap-6">
          <LinkComponent
            styles="flex gap-2 justify-center items-center cursor-pointer hover:text-lighterpurple"
            text={`Download CV`}
            icon={<BsDownload />}
            linkPath={"Resume.pdf"}
            download={true}
          />
          <LinkComponent
            styles="h-10 w-40 flex justify-center items-center gap-2 border border-solid border-lightPurple rounded-2xl cursor-pointer hover:text-lighterpurple hover:border-lighterpurple"
            text={`Let's talk!`}
            icon={<BsWhatsapp />}
            linkPath={"4438565701"}
            isWhatsApp={true}
          />
        </section>
      </div>
    </div>
  );
}

export default Landing;
