import React from "react";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="border-t-[1.5px] border-[#1E2D3D] flex justify-between ">
      <div className="flex items-center">
        <h1 className="pl-[22px] pr-[18px] w-full h-full text-item border-r border-[#1E2D3D] flex items-center justify-center">
          find me in:
        </h1>
        <a
          href=""
          target="_blank"
          className="p-4 border-r border-[#1E2D3D]"
        >
          <FaLinkedinIn className="icon-item" />
        </a>
        <a
          href="https://t.me/muhammadyusufcode"
          target="_blank"
          className="p-4 border-r border-[#1E2D3D]"
        >
          <FaTelegramPlane className="icon-item" />
        </a>
      </div>
      <a
        href="https://github.com/muhammadyusufbrr"
        target="_blank"
        className="github-item flex items-center"
      >
        <span>@muhammadyusufbrr</span>
        <RxGithubLogo className="icon-item" />
      </a>
    </footer>
  );
};

export default Footer;
