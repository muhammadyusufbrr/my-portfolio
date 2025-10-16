import React from "react";
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
import { BsTelephoneFill } from "react-icons/bs";
import { RiFolder3Fill } from "react-icons/ri";

const About = () => {
  return (
    <section>
      <div className="flex">
        <div className="pt-[17.6px] border-r border-[#1E2D3D] inline-block">
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
        <div className="w-full max-w-[241px] border-r border-[#1E2D3D]">
          <div>
            <button className="flex items-center gap-3 text-base font-normal text-white px-4 py-3 border-b border-[#1E2D3D] w-full">
              <MdOutlineArrowDropDown />
              <span>personal-info</span>
            </button>
            <ul className="px-6 flex flex-col gap-2 py-4">
              <li>
                <button className="text-base text-[#607B96] flex items-center">
                  <div className="pr-3">
                    <MdKeyboardArrowDown />
                  </div>
                  <div className="text-[#FF637E] pr-2 ">
                    <RiFolder3Fill />
                  </div>
                  bio
                </button>
                <ul></ul>
              </li>
              <li>
                <button className="text-base text-[#607B96] flex items-center">
                  <div className="pr-3">
                    <MdKeyboardArrowDown />
                  </div>
                  <div className="text-[#00D5BE] pr-2 ">
                    <RiFolder3Fill />
                  </div>
                  interests
                </button>
                <ul></ul>
              </li>
              <li>
                <button className="text-base text-[#607B96] flex items-center">
                  <div className="pr-3">
                    <MdKeyboardArrowDown />
                  </div>
                  <div className="text-[#615FFF] pr-2 ">
                    <RiFolder3Fill />
                  </div>
                  education
                </button>
                <ul>

                  
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <button className="flex items-center gap-3 text-base font-normal text-white px-4 py-3 border-y border-[#1E2D3D] w-full">
              <MdOutlineArrowDropDown />
              <span>contacts</span>
            </button>
            <ul className="px-6 flex flex-col gap-2 py-3">
              <li>
                <a
                  href=""
                  className="flex items-center gap-2 text-[#607B96] font-light text-base"
                >
                  <MdEmail />
                  user@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+998507553347"
                  className="flex items-center gap-2 text-[#607B96] font-light text-base"
                >
                  <BsTelephoneFill />
                  +998 50 755 3347
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
