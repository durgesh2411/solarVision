import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const teamMembers = [
    {
      name: "Dr. Jaya Saxena",
      github: "",
      linkedin: "",
    },
    {
      name: "Durgesh Singh",
      github: "",
      linkedin: "",
    },
    {
      name: "Virat Srivastava",
      github: "",
      linkedin: "",
    },
    {
      name: "Vishu Kalier",
      github: "",
      linkedin: "",
    },
  ];

  return (
    <footer className="text-white py-10 mb-[0.5rem] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <h2 className="text-3xl font-semibold text-center mb-8 bg-black">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8 bg-black">
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
