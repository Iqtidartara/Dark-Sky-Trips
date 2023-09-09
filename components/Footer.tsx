import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090808] text-white w-full py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
          <Image
      src="/LOGO.png"
      alt="Dark Sky Trips"
      width={600}
      height={600}
      className="w-8 h-8 mr-2"
    />
            <p className="text-sm font-semibold  hover:text-orange-500 cursor-pointer">DarkSky Trips</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl hover:text-orange-500" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl hover:text-orange-500" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-orange-500" />
            </a>
            <a href="mailto:contact@example.com">
              <FaEnvelope className="text-xl hover:text-orange-500"/>
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400 text-center sm:text-left hover:text-orange-500 cursor-pointer">
          &copy; {new Date().getFullYear()} DarkSky Trips Travel Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
