import React from "react";
import Coding from "../components/Coding";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Achivments from "../components/Achivments";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="relative flex flex-wrap bg-gray-800 h-full my-2 mx-8 rounded-sm">
        <Skills />

        <Coding />

        <Projects />

        <Contact />

        <Achivments />

        <Footer />    
      </div>
    </>
  );
};

export default Home;
