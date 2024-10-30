import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/devlpr-nitish", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/devplr-nitish/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/devlprnitish",
    icon: FaTwitter,
    label: "Twitter",
  },
];

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="text-2xl" />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-transparent text-white mt-8 w-full">
      <div className="lg:hidden flex flex-wrap w-full mx-6 mb-2">
        <form className="w-auto">
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
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </div>
        <p className="text-sm my-2">
          Made with ❤️ by Nitish © {new Date().getFullYear()} All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
