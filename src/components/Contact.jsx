import React from "react";
import Todos from "./Todos";

const Contact = () => {
  return (
    <div className="relative w-full h-auto mt-5">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 border-l-4 border-blue-500 ml-4">
        Contact
      </h2>

      <div className="w-2/3">
        <form className="bg-transparent rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              name
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 border-1 border-pink-500 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 border-1 border-pink-500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              message
            </label>
            <textarea
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 border-1 border-pink-500 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="write your message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              className="w-full bg-transparent border-2 border-blue-500 hover:border-pink-500 text-white hover:text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              send
            </button>
          </div>
        </form>
      </div>


      <Todos /> 
    </div>
  );
};

export default Contact;
