import React from "react";

type LabelProp = {
  title?: string;
  htmlFor?: string;
};

const Label: React.FC<LabelProp> = ({ title = "", htmlFor = "" }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-[#90A1B9] text-base">
        {title}
      </label>
    </>
  );
};

export default Label;
