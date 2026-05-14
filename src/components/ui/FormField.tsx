"use client";

interface FormFieldProps {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  required?: boolean;
  isFullWidth?: boolean;
}

const FormField = ({
  label,
  placeholder,
  name,
  type = "text",
  required = false,
  isFullWidth = false,
}: FormFieldProps) => {
  return (
    <div
      className={`flex flex-col relative ${isFullWidth ? "md:col-span-2" : ""}`}
    >
      <label
        htmlFor={name}
        className="font-mona font-medium text-[0.95rem] lg:text-base text-primary"
      >
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete="one-time-code"
        className="peer bg-transparent pt-4 pb-3.5 outline-none text-sm font-mona text-primary placeholder:text-[#9ca3af]"
      />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400"></div>
      <div className="absolute bottom-0 left-1/2 w-0 h-0.75 bg-accent-cyan transition-all duration-500 ease-in-out -translate-x-1/2 peer-focus:w-full"></div>
    </div>
  );
};

export default FormField;
