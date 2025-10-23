import React from "react";

type InputProps = {
  type?: React.HTMLInputTypeAttribute; 
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`w-full border-1 border-[#314158] p-3 rounded-lg bg-[#020618] text-base text-[#90A1B9] focus:border-[#CAD5E2] focus:outline-none transition-colors duration-200 disabled:bg-[#1E2D3D] disabled:cursor-not-allowed ${className}`}
    />
  );
};

export default Input;
