import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-lg mx-2 uppercase">Portfolio</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="www.linkedin.com/in/danish-siddiqui-6a6648253" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Danish-Siddiqui-0318" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
