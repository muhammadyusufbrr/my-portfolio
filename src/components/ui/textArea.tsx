type TextAreaType = {
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

const TextArea: React.FC<TextAreaType> = ({
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
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`w-full border-1 border-[#314158] p-3 rounded-lg bg-[#020618] text-base text-[#90A1B9]  resize-none max-h-[120px] min-h-[120px] focus:border-[#CAD5E2] focus:outline-none transition-colors duration-200 ${className}`}
    ></textarea>
  );
};

export default TextArea;
