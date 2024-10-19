import React from 'react'
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";


const Coding = () => {
  return (
    <div className="absolute top-0 right-0 w-1/3 h-auto mt-5">
      <div className="p-4 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-4 px-2 border-l-4 border-blue-500">
          Coding Platforms
        </h2>
      </div>
      <div className="relative flex flex-col justify-center mx-5 bg-green-900 p-2 my-2 rounded-sm">
        <h2 className="text-xl font-semibold text-green-500">Geeksforgeeks</h2>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">
            Problems Solved :{" "}
          </span>{" "}
          <span className="text-gray-300"> 260+</span>
        </div>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">Streak : </span>{" "}
          <span className="text-gray-300"> 140+ 🔥</span>
        </div>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">
            Contest Rating :{" "}
          </span>{" "}
          <span className="text-gray-300"> 4884 (Globally) 🌎</span>
        </div>
        <div className=" absolute top-4 right-0 flex items-center justify-start mx-6">
          <Link
            to="https://www.geeksforgeeks.org/user/devlprnitish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            <FaLocationArrow className="text-green-500 text-xl" />
          </Link>
        </div>
      </div>
      <div className="relative flex flex-col justify-center mx-5 bg-yellow-900 p-2 my-2 rounded-sm">
        <h2 className="text-xl font-semibold text-yellow-500">Leetcode</h2>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">
            Problems Solved :{" "}
          </span>{" "}
          <span className="text-gray-300"> 280+</span>
        </div>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">Streak : </span>{" "}
          <span className="text-gray-300"> 130+ 🔥</span>
        </div>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">
            Contest Rating :{" "}
          </span>{" "}
          <span className="text-gray-300"> 4689 (Globally) 🌎</span>
        </div>
        <div className=" absolute top-4 right-0 flex items-center justify-start mx-6">
          <Link
            to="https://leetcode.com/u/devlpr-nitish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            <FaLocationArrow className="text-yellow-500 text-xl" />
          </Link>
        </div>
      </div>
      <div className="relative flex flex-col justify-center mx-5 bg-gray-900 p-2 my-2 rounded-sm">
        <h2 className="text-xl font-semibold text-gray-500">Codeforces</h2>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">
            Problems Solved :{" "}
          </span>{" "}
          <span className="text-gray-300"> ___+</span>
        </div>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">Streak : </span>{" "}
          <span className="text-gray-300"> ___+ 🔥</span>
        </div>
        <div className="flex items-center justify-start mx-6">
          <span className="text-gray-300 font-semibold mx-1">
            Contest Rating :{" "}
          </span>{" "}
          <span className="text-gray-300"> ____ (Globally) 🌎</span>
        </div>

        <div className=" absolute top-4 right-0 flex items-center justify-start mx-6">
          <Link
            to="https://codeforces.com/profile/devlprnitish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            <FaLocationArrow className="text-blue-500 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Coding;
