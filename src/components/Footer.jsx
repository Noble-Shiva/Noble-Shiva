import React from 'react';
import { FaHome, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdPerson, IoMdBriefcase } from 'react-icons/io';
import { RiArticleLine, RiContactsLine, RiFileTextLine } from 'react-icons/ri';

function Footer() {
  return (
    <footer className="bg-black bg-opacity-95 max-w-3xl mx-auto text-gray-300 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center">
                  <FaHome className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center">
                  <IoMdPerson className="mr-2" /> About
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center">
                  <IoMdBriefcase className="mr-2" /> Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Noble-Shiva"
                  target="_blank"
                  className="flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/l-shiva-kumar-reddy/"
                  target="_blank"
                  className="flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/LShivkumarreddy"
                  target="_blank"
                  className="flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center">
                  <RiArticleLine className="mr-2" /> Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center">
                  <RiContactsLine className="mr-2" /> Contact
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <RiFileTextLine className="mr-2" /> My CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-8 text-center">
          <p>&copy; 2024 . All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
