import React from 'react'

const Skills = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-4 px-4 absolute top-2 left-1 border-l-4 border-blue-500 ml-4">
        I do
      </h2>
      <div className="w-2/3 p-3 mx-2 mt-10">
        <div className="relative flex flex-wrap gap-4 py-6 px-4 border-2 border-green-500 rounded-md shadow-lg">
          <h3 className="text-sm font-semibold text-gray-300 mb-2 absolute top-0 left-2 ">
            Frontend
          </h3>
          {["React", "Tailwind", "boostrap", "HTML", "CSS", "JavaScript"].map(
            (skill) => (
              <div
                key={skill}
                className="px-3 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 shadow-md"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-2/3 p-3 mx-2">
        <div className="relative flex flex-wrap gap-4 py-6 px-4 border-2 border-yellow-500 rounded-md shadow-lg">
          <h3 className="text-sm font-semibold text-gray-300 mb-2 absolute top-0 left-2 ">
            Backend
          </h3>
          {["Node.Js", "Express", "JWT", "RESTAPI", "Socket.io", "Auth0"].map(
            (skill) => (
              <div
                key={skill}
                className="px-3 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 shadow-md"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-2/3 p-3 mx-2">
        <div className="relative flex flex-wrap gap-4 py-6 px-4 border-2 border-red-500 rounded-md shadow-lg">
          <h3 className="text-sm font-semibold text-gray-300 mb-2 absolute top-0 left-2 ">
            Database
          </h3>
          {["MongoDB", "MySQL", "Firebase"].map((skill) => (
            <div
              key={skill}
              className="px-3 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-3 mx-2">
        <div className="relative flex flex-wrap gap-4 py-6 px-4 border-2 border-blue-500 rounded-md shadow-lg">
          <h3 className="text-sm font-semibold text-gray-300 mb-2 absolute top-0 left-2 ">
            Devops
          </h3>
          {["Git", "GitHub", "AWS", "Docker", "slack"].map((skill) => (
            <div
              key={skill}
              className="px-3 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills
