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
    <div id="home">
      <div className="w-10/12 mx-auto bg-lightgray h-16 text-lg md:flex justify-end pr-11  sm:hidden">
        <Nav />
      </div>

      <div className="flex md:flex-row mt-24 ml-40 mr-40 mb-40 sm:flex-col sm:items-center sm:gap-10">
        <section className="flex-1 order-2 md:order-1 ">
          <div>
            <div className="sm:flex sm:flex-col sm:items-center sm:gap-3">
              <p className="text-xl w-40 h-11 bg-lightBackgroundPurple rounded-full flex items-center justify-center font-extrabold">
                👋 Hello!
              </p>

              <p className="text-5xl font-extrabold mt-6">{myName}</p>
              <ul className="flex flex-row gap-6 font-light mt-4">
                <li>Web Developer</li>
                <li className="list-disc">UI Design</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-row gap-3 sm:justify-center">
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
        <section className="flex-1 order-1 md:order-2">
          <CirclePhoto imagePath={imagePath} />
        </section>
        <section className="flex justify-start items-center flex-1 md:flex-col text-lightpurple md:gap-2 pt-10 order-3 md:order-3 sm:flex-row sm:gap-6">
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
