import React from "react";
import LinkComponent from "../components/LinkComponent";
import { BsWhatsapp } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { AiOutlineArrowUp } from "react-icons/ai";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full md:w-2/4 m-auto flex flex-col items-center px-4 md:px-0 mt-36 pb-36"
    >
      <p className="bg-lightBackgroundPurple rounded-full p-3 mb-6">
        📬 Contact
      </p>
      <h1 className="font-extrabold text-4xl md:text-6xl mb-16">Let's talk!</h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-10 items-center w-full justify-center">
        <LinkComponent
          styles="h-10 w-40 flex justify-center items-center gap-2 border border-solid border-lightPurple rounded-2xl cursor-pointer hover:text-lighterpurple hover:border-lighterpurple text-lightpurple"
          text={`Let's talk!`}
          icon={<BsWhatsapp />}
          linkPath={"4438565701"}
          isWhatsApp={true}
        />
        <div className="flex flex-col gap-2 items-center">
          <a
            href="mailto:tudorbocaa@gmail.com"
            className="text-lightpurple text-xl"
          >
            <LuSend />
          </a>
          <a
            href="mailto:tudorbocaa@gmail.com"
            className="text-lightpurple text-xl"
          >
            E-mail:
          </a>
          <a href="mailto:tudorbocaa@gmail.com" className="opacity-50 text-xl">
            tudorbocaa@gmail.com
          </a>
        </div>
      </div>

      <a
        href="#home"
        className="flex flex-row justify-center items-center text-xl font-bold text-lightpurple gap-2"
      >
        Go to the top
        <div className="text-2xl">
          <AiOutlineArrowUp />
        </div>
      </a>
    </div>
  );
}

export default Contact;
