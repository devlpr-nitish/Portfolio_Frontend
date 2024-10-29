import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const CodingPlatform = ({
  platform,
  bgColor,
  link,
  stats,
  linkColor,
  iconColor,
}) => (
  <div
    className={`relative flex flex-col justify-center mx-5 ${bgColor} p-2 my-2 rounded-sm`}
  >
    <h2 className={`text-xl font-semibold ${linkColor}`}>{platform}</h2>
    {stats.map((stat, index) => (
      <div key={index} className="flex items-center justify-start mx-6">
        <span className="text-gray-300 font-semibold mx-1">{stat.label} :</span>
        <span className="text-gray-300">{stat.value}</span>
      </div>
    ))}
    <div className="absolute top-4 right-0 flex items-center justify-start mx-6">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        <FaLocationArrow className={`${iconColor} text-xl`} />
      </Link>
    </div>
  </div>
);

const Coding = () => {
  const platforms = [
    {
      platform: "Geeksforgeeks",
      bgColor: "bg-green-900",
      link: "https://www.geeksforgeeks.org/user/devlprnitish/",
      linkColor: "text-green-500",
      iconColor: "text-green-500",
      stats: [
        { label: "Problems Solved", value: "260+" },
        { label: "Streak", value: "140+ 🔥" },
        { label: "Contest Rating", value: "4884 (Globally) 🌎" },
      ],
    },
    {
      platform: "Leetcode",
      bgColor: "bg-yellow-900",
      link: "https://leetcode.com/u/devlpr-nitish/",
      linkColor: "text-yellow-500",
      iconColor: "text-yellow-500",
      stats: [
        { label: "Problems Solved", value: "280+" },
        { label: "Streak", value: "130+ 🔥" },
        { label: "Contest Rating", value: "4689 (Globally) 🌎" },
      ],
    },
    {
      platform: "Codeforces",
      bgColor: "bg-gray-900",
      link: "https://codeforces.com/profile/devlprnitish/",
      linkColor: "text-gray-500",
      iconColor: "text-blue-500",
      stats: [
        { label: "Problems Solved", value: "___+" },
        { label: "Streak", value: "___+ 🔥" },
        { label: "Contest Rating", value: "____ (Globally) 🌎" },
      ],
    },
  ];

  return (
    <div className="w-full lg:w-1/3 h-auto">
      <div className="p-4 flex items-center justify-start">
        <h2 className="text-2xl font-bold text-white mb-4 px-2 border-l-4 border-blue-500">
          Coding Platforms
        </h2>
      </div>
      {platforms.map((props, index) => (
        <CodingPlatform key={index} {...props} />
      ))}
    </div>
  );
};

export default Coding;
