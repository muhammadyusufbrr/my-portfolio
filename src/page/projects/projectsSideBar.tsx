"use client"
import IconJs from "@/components/icon/iconJs";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const ProjectsSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-base font-normal text-white px-6 h-12 border-b border-[#1E2D3D] w-full"
      >
        <MdOutlineArrowDropDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
        <span>projects</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col items-start w-full gap-2 p-3 overflow-hidden"
          >
            <li className="w-full">
              <label className="w-full px-1 pl-3 flex items-center gap-6 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="react"
                    className="peer h-5 w-5 appearance-none rounded border border-[#62748E] bg-transparent cursor-pointer 
        checked:bg-[#62748E] checked:border-[#62748E] transition-all duration-200"
                  />
                  <IoCheckmarkSharp className="absolute text-xs text-white opacity-0 peer-checked:opacity-100  pointer-events-none transition-opacity duration-200" />
                </div>
                <div className="flex items-center gap-2.5 ">
                  <RiReactjsLine className="text-[#607B96] text-2xl" />
                  <span className="text-white text-base">React</span>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="w-full px-1 pl-3 flex items-center gap-6 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="html"
                    className="peer h-5 w-5 appearance-none rounded border border-[#62748E] bg-transparent cursor-pointer 
        checked:bg-[#62748E] checked:border-[#62748E] transition-all duration-200"
                  />
                  <IoCheckmarkSharp className="absolute text-xs text-white opacity-0 peer-checked:opacity-100  pointer-events-none transition-opacity duration-200" />
                </div>
                <div className="flex items-center gap-2.5 ">
                  <FaHtml5 className="text-[#607B96] text-2xl" />
                  <span className="text-white text-base">HTML</span>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="w-full px-1 pl-3 flex items-center gap-6 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="css"
                    className="peer h-5 w-5 appearance-none rounded border border-[#62748E] bg-transparent cursor-pointer 
        checked:bg-[#62748E] checked:border-[#62748E] transition-all duration-200"
                  />
                  <IoCheckmarkSharp className="absolute text-xs text-white opacity-0 peer-checked:opacity-100  pointer-events-none transition-opacity duration-200" />
                </div>
                <div className="flex items-center gap-2.5 ">
                  <FaCss3 className="text-[#607B96] text-2xl" />
                  <span className="text-white text-base">CSS</span>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="w-full px-1 pl-3 flex items-center gap-6 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="js"
                    className="peer h-5 w-5 appearance-none rounded border border-[#62748E] bg-transparent cursor-pointer 
        checked:bg-[#62748E] checked:border-[#62748E] transition-all duration-200"
                  />
                  <IoCheckmarkSharp className="absolute text-xs text-white opacity-0 peer-checked:opacity-100  pointer-events-none transition-opacity duration-200" />
                </div>
                <div className="flex items-center gap-2.5 ">
                  <IconJs />
                  <span className="text-white text-base">JavaScript</span>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="w-full px-1 pl-3 flex items-center gap-6 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="next"
                    className="peer h-5 w-5 appearance-none rounded border border-[#62748E] bg-transparent cursor-pointer 
        checked:bg-[#62748E] checked:border-[#62748E] transition-all duration-200"
                  />
                  <IoCheckmarkSharp className="absolute text-xs text-white opacity-0 peer-checked:opacity-100  pointer-events-none transition-opacity duration-200" />
                </div>
                <div className="flex items-center gap-2.5 ">
                  <TbBrandNextjs className="text-[#607B96] text-2xl" />
                  <span className="text-white text-base">Next</span>
                </div>
              </label>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSideBar;
