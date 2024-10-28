import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const teamMembers = [
    {
      name: "Durgesh Singh",
      github: "https://github.com/vishukalier",
      linkedin: "https://www.linkedin.com/in/vishukalier18082003/",
    },
    {
      name: "Virat Srivastava",
      github: "https://github.com/durgesh",
      linkedin: "https://www.linkedin.com/in/durgeshsingh",
    },
    {
      name: "Vishu Kalier",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
  ];

  return (
    <footer className="text-white py-10 mb-[0.5rem] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <h2 className="text-3xl font-semibold text-center mb-8 bg-black">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-black">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md flex flex-col items-center text-center bg-black"
            >
              <h3 className="text-3xl font-semibold mb-4 bg-black">{member.name}</h3>
              <div className="space-y-3 bg-black">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition duration-200 flex items-center bg-black"
                >
                  <FaGithub className="mr-2 text-blue-500 bg-black" /> {/* GitHub icon */}
                  GitHub
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition duration-200 flex items-center bg-black"
                >
                  <FaLinkedin className="mr-2 text-blue bg-black" /> {/* LinkedIn icon */}
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
