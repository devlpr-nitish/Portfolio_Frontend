import React from "react";
import { Link } from "react-router-dom";
import { IoIosDownload } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
  const handleExternalLink = () => {
    window.open(
      "https://drive.google.com/your-resume-link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center mt-8 mx-8 rounded-sm">
      <div className="flex items-center">
        <img
          src="https://www.geeksforgeeks.org/_next/image/?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fauth%2Fprofile%2Fz6cemk4e7k40ehav58fk&w=128&q=75"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-gray-500"
        />
        <div className="ml-4 flex flex-col">
          <span className="text-white text-lg">Nitish</span>
          <span className="text-gray-300 text-sm">@devlprnitish</span>
        </div>
        <div className="ml-4 relative group h-auto w-auto">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <IoMdArrowDropdown />
          </button>
          <div className="z-10 h-auto w-96 absolute left-0 mt-2 bg-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="py-2 px-4 h-auto w-auto">
              <p className="text-sm text-gray-300 text-start h-auto w-auto">
                Hello, I'm a Computer Science Engineering student with a strong
                foundation in Java, Data Structures, and Web Development. For
                the past year, I’ve served as a campus mantri for GeeksforGeeks,
                where I've had the opportunity to engage deeply with tech
                communities and foster learning environments. My passion lies in
                using technology to create innovative, real-world solutions. <br/> I
                thrive on tackling complex challenges and continuously expanding
                my skill set to stay ahead in the fast-evolving tech landscape.
                I’m actively seeking opportunities to apply my expertise and
                grow as a software engineer. Let’s connect and explore potential
                collaborations to drive impact in the digital space.
                <br/>
                 Thank you!
                :)
              </p>
            </div>
          </div>
        </div>
      </div>

      <form className="hidden sm:flex items-center">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-0 bg-transparent border-2 border-r-0 border-blue-500 hover:border-blue-500 text-white"
        />
        <button
          type="submit"
          className="bg-transparent border-2 border-blue-500 hover:border-pink-500 text-white px-4 py-2 rounded-r-md"
        >
          Subscribe
        </button>
      </form>

      <div className="flex items-center relative bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded border-2 border-transparent animate-pulse">
        <Link onClick={handleExternalLink} className="mr-2">
          Resume
        </Link>
        <IoIosDownload className="text-white absolute top-2.2 right-0 mr-2" />
      </div>
    </nav>
  );
};

export default Navbar;
