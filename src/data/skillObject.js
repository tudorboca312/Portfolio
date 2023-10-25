import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoFigma,
  BiLogoPython,
  BiLogoBootstrap,
  BiLogoNodejs,
  BiLogoRedux,
  BiLogoGithub,
  BiLogoWindows,
} from "react-icons/bi";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { FaLinux } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

const mainSkills = [
  {
    icon: <BiLogoReact />,
    title: "React",
    description:
      "A JavaScript library for building user interfaces efficiently with a focus on UI components. ",
    main: true,
  },
  {
    icon: <BiLogoJavascript />,
    title: "JavaScript",
    description:
      "A versatile, high-level programming language that powers interactive and dynamic web content.",
    main: true,
  },
  {
    icon: <BiLogoRedux />,
    title: "Redux",
    description:
      "A predictable state container for JavaScript apps, often used with React.",
    main: true,
  },
  {
    icon: <BiLogoNodejs />,
    title: "NodeJS",
    description:
      "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side scripting.",
    main: true,
  },
  {
    icon: <BiLogoCss3 />,
    title: "CSS",
    description:
      "Latest evolution of the Cascading Style Sheets language for website styling.",
    main: true,
  },
  {
    icon: <AiFillHtml5 />,
    title: "HTML5",
    description:
      "Latest version of the HTML standard for structuring and presenting content on the web.",
    main: true,
  },
  {
    icon: <BiLogoTailwindCss />,
    title: "TailwindCSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
    main: true,
  },
  {
    icon: <BiLogoBootstrap />,
    title: "BootsTrap",
    description:
      "Open-source CSS framework directed at responsive, mobile-first front-end web development.",
    main: true,
  },
  {
    icon: <BiLogoFigma />,
    title: "Figma",
    description:
      "A web-based vector graphics editor and prototyping tool for collaborative design.",
    main: true,
  },
  {
    icon: <BiLogoPython />,
    title: "Python",
    description:
      "A high-level, interpreted programming language known for its simplicity and versatility.",
    main: false,
  },
  {
    icon: <AiOutlineConsoleSql />,
    title: "SQL",
    description:
      "Structured Query Language used for managing and querying relational databases.",
    main: false,
  },
  {
    icon: <BiLogoGithub />,
    title: "GitHub",
    description:
      "A platform for version control and collaborative software development using Git.",
    main: false,
  },
  {
    icon: <FaLinux />,
    title: "Linux",
    description: "A popular open-source Unix-like operating system.",
    main: false,
  },
  {
    icon: <BiLogoWindows />,
    title: "Windows",
    description: "A widely-used operating system by Microsoft.",
    main: false,
  },
  {
    icon: <SiMicrosoftazure />,
    title: "Azure",
    description:
      "Microsoft's cloud computing service for building, testing, deploying, and managing applications and services.",
    main: false,
  },
];

export { mainSkills };
