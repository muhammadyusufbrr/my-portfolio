"use client";
import React, { useState } from "react";
import Image from "next/image";
import hobbiesIcon from "../../../public/svg/hobbies-icon.svg";
import personalInfoIcon from "../../../public/svg/personal-info-icon.svg";
import professionalInfoIcon from "../../../public/svg/professional-info-icon.svg";
import Link from "next/link";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import { RiFolder3Fill, RiMarkdownFill } from "react-icons/ri";
import { HiPhone } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/context/store";
import { toggleDropdown } from "@/context/features/dropdownSlice";

const AboutSideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isPersonalOpen = useSelector(
    (state: RootState) => state.dropdown.isPersonalInfoDropdownOpen
  );
  const isContactOpen = useSelector(
    (state: RootState) => state.dropdown.isAboutContactsDropdownOpen
  );
  const isEducationOpen = useSelector(
    (state: RootState) => state.dropdown.isEducationDropdownOpen
  );
  return (
    <div className="flex h-full">
      <div className="pt-[17.6px] border-r border-[#1E2D3D] inline-block h-full">
        <ul className="flex items-center flex-col ">
          <li>
            <Link
              href={""}
              className="inline-block pb-4 pt-3 pl-[20.5px] pr-[24.5px]"
            >
              <Image
                src={hobbiesIcon}
                alt="hobbies icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="inline-block py-4 pl-[20.5px] pr-[24.5px]"
            >
              <Image
                src={personalInfoIcon}
                alt="personal-info-icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="inline-block py-4 pl-[20.5px] pr-[24.5px]"
            >
              <Image
                src={professionalInfoIcon}
                alt="professional-info-icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-[241px]">
        <div>
          <button
            onClick={() =>
              dispatch(toggleDropdown("isPersonalInfoDropdownOpen"))
            }
            className="flex items-center gap-3 text-base font-normal text-white px-6  h-12 border-b border-[#1E2D3D] w-full"
          >
            <MdOutlineArrowDropDown
              className={`transition-transform duration-300 ${
                isPersonalOpen ? "rotate-0" : "rotate-180"
              }`}
            />
            <span>personal-info</span>
          </button>
          <AnimatePresence>
            {isPersonalOpen && (
              <motion.ul
                key="dropdown"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className=" flex flex-col gap-2   overflow-hidden"
              >
                <li className="w-full mt-3">
                  <button className="text-base text-[#607B96] flex items-center px-6 w-full">
                    <div className="mr-3">
                      <MdKeyboardArrowDown />
                    </div>
                    <div className="text-[#FF637E] mr-2 ">
                      <RiFolder3Fill />
                    </div>
                    bio
                  </button>
                  <ul></ul>
                </li>
                <li className="w-full">
                  <button className="text-base text-[#607B96] flex items-center px-6 w-full">
                    <div className="mr-3">
                      <MdKeyboardArrowDown />
                    </div>
                    <div className="text-[#00D5BE] mr-2 ">
                      <RiFolder3Fill />
                    </div>
                    interests
                  </button>
                  <ul></ul>
                </li>
                <li className="w-full mb-3">
                  <button
                    onClick={() =>
                      dispatch(toggleDropdown("isEducationDropdownOpen"))
                    }
                    className={`text-base flex items-center px-6 w-full hover:text-white transition-colors duration-200 ${
                      isEducationOpen ? "text-white" : " text-[#607B96]"
                    }`}
                  >
                    <MdKeyboardArrowDown
                      className={`mr-3 transition-transform duration-300 ${
                        isEducationOpen ? "rotate-0" : "rotate-180"
                      }`}
                    />
                    <div className="text-[#615FFF] mr-2 ">
                      <RiFolder3Fill />
                    </div>
                    education
                  </button>
                  <AnimatePresence>
                    {isEducationOpen && (
                      <motion.ul
                        key="dropdown"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="  overflow-hidden"
                      >
                        <li className="w-full mt-2">
                          <div className="w-full pl-13  flex items-center gap-2  cursor-pointer group">
                            <div>
                              <RiMarkdownFill className="text-[#62748E] text-base group-hover:text-white transition-colors duration-200" />
                            </div>
                            <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                              high-school
                            </span>
                          </div>
                        </li>
                        <li className="w-full mt-3">
                          <div className="w-full pl-13  flex items-center gap-2  cursor-pointer group">
                            <div>
                              <RiMarkdownFill className="text-[#62748E] text-base group-hover:text-white transition-colors duration-200" />
                            </div>
                            <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                              university
                            </span>
                          </div>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div>
          <button
            onClick={() =>
              dispatch(toggleDropdown("isAboutContactsDropdownOpen"))
            }
            className={`flex items-center gap-3 text-base font-normal text-white px-6  h-12    ${
              isPersonalOpen ? "border-y" : "border-b"
            } border-[#1E2D3D] w-full`}
          >
            <MdOutlineArrowDropDown
              className={`transition-transform duration-300 ${
                isContactOpen ? "rotate-0" : "rotate-180"
              }`}
            />
            <span>contacts</span>
          </button>
          <AnimatePresence>
            {isContactOpen && (
              <motion.ul
                key="dropdown"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className=" flex flex-col gap-2  overflow-hidden"
              >
                <li className="w-full mt-3">
                  <a
                    href="mailto:muhammadyusufdeveloper@gmail.com"
                    className="w-full px-6  flex items-center gap-2  cursor-pointer group"
                  >
                    <div>
                      <MdEmail className="text-[#62748E] text-base group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                      muha...@gmail.com
                    </span>
                  </a>
                </li>
                <li className="w-full mb-3">
                  <a
                    href="tel:+998507553347"
                    className="w-full px-6 flex items-center gap-2 cursor-pointer group"
                  >
                    <div>
                      <HiPhone className="text-[#62748E] text-base group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-[#90A1B9] text-base group-hover:text-white transition-colors duration-200">
                      +998507553347
                    </span>
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutSideBar;
