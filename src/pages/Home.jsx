import React from "react";
import Coding from "../components/Coding";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Achivments from "../components/Achivments";
import Footer from "../components/Footer";
import Todos from "../components/Todos";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <div className="relative flex flex-wrap bg-gray-800 h-full w-auto my-2 mx-8 rounded-sm">
        <div className="container w-full flex flex-col lg:flex-row flex-wrap">
          <Skills />
          <Coding />
        </div>

        <Projects />
        <div className="container w-full flex flex-col lg:flex-row flex-wrap">
          <Contact />
          <Todos />
        </div>
        <Achivments />
        <Blogs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
