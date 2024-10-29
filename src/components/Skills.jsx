import React from "react";

const SkillSection = ({ title, skills, borderColor }) => (
  <div className="w-2/3 lg:w-full p-3 mx-2">
    <div
      className={`relative flex flex-wrap gap-4 py-6 px-4 border-2 ${borderColor} rounded-md shadow-lg`}
    >
      <h3 className="text-sm font-semibold text-gray-300 mb-2 absolute top-0 left-2">
        {title}
      </h3>
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-3 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 shadow-md"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillSections = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind", "Bootstrap", "HTML", "CSS", "JavaScript"],
      borderColor: "border-green-500",
    },
    {
      title: "Backend",
      skills: ["Node.Js", "Express", "JWT", "REST API", "Socket.io", "Auth0"],
      borderColor: "border-yellow-500",
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Firebase"],
      borderColor: "border-red-500",
    },
    {
      title: "DevOps",
      skills: ["Git", "GitHub", "AWS", "Docker", "Slack"],
      borderColor: "border-blue-500",
    },
  ];

  return (
    <div className="w-full mx-16 lg:w-2/3 lg:mx-0 h-auto">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 mt-5 border-l-4 border-blue-500 ml-5">
        I do
      </h2>
      {skillSections.map((section, index) => (
        <SkillSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Skills;
