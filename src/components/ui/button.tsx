import React from "react";

type ButtonSpecies = "primary" | "default" | "ghost" | "disabled";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  species?: ButtonSpecies;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  species = "default",
  className = "",
}) => {
  const baseStyle =
    "py-2.5 px-3 rounded-[10px] text-sm font-medium transition-all duration-200";

  const styles: Record<ButtonSpecies, string> = {
    primary: "bg-[#FFB86A] text-[#020618] hover:bg-[#FFD6A7]",
    default: "bg-[#45556C] text-[#F8FAFC]",
    ghost:
      "border border-[#F8FAFC] bg-transparent text-[#F8FAFC] hover:opacity-50",
    disabled: "bg-[#314158] text-[#62748E] !cursor-default  opacity-60",
  };

  const selectedStyle = styles[species];

  return (
    <button
      type={type}
      className={`${baseStyle} ${selectedStyle} ${className}`}
      disabled={species === "disabled"}
    >
      {title}
    </button>
  );
};

export default Button;
