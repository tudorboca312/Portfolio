import React from "react";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Journey from "./pages/Journey";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    // <div className="bg-darkgray min-w-fit text-white w-screen	">
    <div className="bg-darkgray text-white w-screen	sm:overflow-hidden">
      <div className="pt-8">
        <Landing />
        <Skills />
        <AboutMe />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </div>
  );
}

export default App;
