"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { IoOpenOutline } from "react-icons/io5";
import { MdEmail, MdOutlineArrowDropDown } from "react-icons/md";

const ContactSideBar = () => {
  const [isContactsOpen, setIsContactsOpen] = useState(true);
  const [isFindMeOpen, setIsFindMeOpen] = useState(true);
  return (
    <>
      <div className="mb-3">
        <button
          onClick={() => setIsContactsOpen(!isContactsOpen)}
          className="flex items-center gap-3 text-base font-normal text-white px-6  h-12 border-b border-[#1E2D3D] w-full"
        >
          <MdOutlineArrowDropDown
            className={`transition-transform duration-300 ${
              isContactsOpen ? "rotate-0" : "rotate-180"
            }`}
          />
          <span>contacts</span>
        </button>
        <AnimatePresence>
          {isContactsOpen && (
            <motion.ul
              key="dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-start w-full gap-2 overflow-hidden"
            >
              <li className="w-full mt-3">
                <a
                  href="mailto:muhammadyusufdeveloper@gmail.com"
                  className="w-full px-6  flex items-center gap-2  cursor-pointer group"
                >
                  <MdEmail className="text-[#62748E] text-2xl group-hover:text-white transition-colors duration-200" />
                  <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                    muhamma...@gmail.com
                  </span>
                </a>
              </li>
              <li className="w-full mb-3">
                <a
                  href="tel:+998507553347"
                  className="w-full px-6 flex items-center gap-2 cursor-pointer group"
                >
                  <HiPhone className="text-[#62748E] text-2xl group-hover:text-white transition-colors duration-200" />
                  <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                    +998507553347
                  </span>
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsFindMeOpen(!isFindMeOpen)}
          className={`flex items-center gap-3 text-base font-normal text-white px-6 h-12   ${
            isContactsOpen ? "border-y" : "border-b"
          } border-[#1E2D3D] w-full`}
        >
          <MdOutlineArrowDropDown
            className={`transition-transform duration-300 ${
              isFindMeOpen ? "rotate-0" : "rotate-180"
            }`}
          />
          <span>find-me-also-in</span>
        </button>
        <AnimatePresence>
          {isFindMeOpen && (
            <motion.ul
              key="dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-start w-full gap-2 p-3 overflow-hidden"
            >
              <li className="w-full">
                <a
                  href="https://www.youtube.com/@MuhammadyusufGulomov-Code"
                  className="w-full px-1 pl-3 flex items-center gap-2 cursor-pointer group"
                >
                  <IoOpenOutline className="text-[#62748E] text-2xl group-hover:text-white transition-colors duration-200" />
                  <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200 ">
                    YouTube
                  </span>
                </a>
              </li>
              <li className="w-full">
                <a
                  href="https://dev.to/muhammadyusuf_dev"
                  className="w-full px-1 pl-3 flex items-center gap-2 cursor-pointer group"
                >
                  <IoOpenOutline className="text-[#62748E] text-2xl group-hover:text-white transition-colors duration-200" />
                  <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                    dev.to
                  </span>
                </a>
              </li>
              <li className="w-full">
                <a
                  href="https://www.instagram.com/muhammadyusuf_code/"
                  className="w-full px-1 pl-3 flex items-center gap-2 cursor-pointer group"
                >
                  <IoOpenOutline className="text-[#62748E] text-2xl group-hover:text-white transition-colors duration-200" />
                  <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                    Instagram
                  </span>
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContactSideBar;
