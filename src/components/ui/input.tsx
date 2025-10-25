import React from "react";
import { MdErrorOutline } from "react-icons/md";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[4px]">
        <div className="w-full relative flex items-center">
          <input
            ref={ref}
            {...props}
            className={`w-full border flex-1 ${
              errorMessage
                ? "border-[#FB2C36] bg-[#460809]"
                : "border-[#314158] bg-[#020618] focus:border-[#CAD5E2]"
            }  p-3 rounded-lg  text-base text-[#90A1B9]  focus:outline-none transition-colors duration-200 
            disabled:bg-[#1E2D3D] disabled:cursor-not-allowed ${className}`}
          />
          {errorMessage && (
            <div className="absolute right-2.5 text text-2xl text-[#FB2C36]">
              <MdErrorOutline />
            </div>
          )}
        </div>
        {errorMessage && (
          <p className="text-[#FB2C36] text-sm">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
