import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-auto mt-5">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 border-l-4 border-blue-500 ml-4">
        Projects
      </h2>

      <div className="flex flex-wrap justify-start mx-20  lg:mx-4 gap-6">
        {[
          {
            name: "Project 1",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeysdimqbiyxPQiSDop74m7DeJJySPlir7bA&s",
            description:
              "This is a web application that helps users manage tasks.",
            technologies: ["React", "Node.js", "MongoDB"],
          },
          {
            name: "Project 2",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeysdimqbiyxPQiSDop74m7DeJJySPlir7bA&s",
            description: "This is a mobile app that tracks health and fitness.",
            technologies: ["React Native", "Firebase", "Redux"],
          },
          {
            name: "Project 3",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeysdimqbiyxPQiSDop74m7DeJJySPlir7bA&s",
            description:
              "This is an e-commerce website with payment integration.",
            technologies: ["Vue.js", "Express", "Stripe API"],
          },
          {
            name: "Project 4",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeysdimqbiyxPQiSDop74m7DeJJySPlir7bA&s",
            description:
              "This is an AI-powered chatbot that provides customer support.",
            technologies: ["Python", "TensorFlow", "NLP"],
          },
          {
            name: "Project 5",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeysdimqbiyxPQiSDop74m7DeJJySPlir7bA&s",
            description:
              "This is an AI-powered chatbot that provides customer support.",
            technologies: ["Python", "TensorFlow", "NLP"],
          },
        ].map((project, index) => (
          <div
            key={index}
            className="relative w-64 h-64 bg-gray-800 rounded-lg overflow-hidden group hover:border-2 border-blue-500 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((technology, technologyIndex) => (
                  <span
                    key={technologyIndex}
                    className="px-2 py-1 bg-transparent border-2 border-pink-500 text-white text-xs rounded"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
