import React from "react";
import { IoMdClose } from "react-icons/io";

type HeaderTabProp = {
  title?: string;
};

const HeaderTab = ({ title = "" }: HeaderTabProp) => {
  return (
    <div className="border-b border-[#1E2D3D] h-12 bg-[#011627] w-full">
      {title ? (
        <div className="h-full px-6 border-r border-[#1E2D3D] text-[#90A1B9] max-w-[242px] flex items-center justify-between text-base">
          <span className="cursor-default select-none">{title}</span>
          <button>
            <IoMdClose />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderTab;
