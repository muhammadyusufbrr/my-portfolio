import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[4px]">
        <textarea
          ref={ref}
          {...props}
          className={`w-full border rounded-lg p-3 text-base text-[#90A1B9] 
            resize-none max-h-[120px] min-h-[120px] transition-colors duration-200 focus:outline-none 
           ${
             errorMessage
               ? "border-[#FB2C36] bg-[#460809]"
               : "border-[#314158] bg-[#020618] focus:border-[#CAD5E2]"
           } ${className}`}
        />
        {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
