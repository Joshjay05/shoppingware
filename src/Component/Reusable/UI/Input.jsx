/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CheckIcon, ChevronDownIcon, SearchIcon } from "lucide-react";

const styles = {
  base: {
    transition: "all 0.3s ease",
    borderRadius: "0.375rem",
    fontWeight: "500",
    outline: "none",
    focus: {
      ringWidth: "2px",
      ringColor: "blue-500",
    },
  },

  button: {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
    gradient: "bg-gradient-to-r  from-blue-500 to-purple-600 text-white",
  },

  input: {
    default: "border border-gray-300 focus:border-blue-500",
    error: "border-red-500 text-red-900",
    success: "border-green-500 text-green-900",
  },
};

// Reusable Button Component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  disabled = false,
  className = "",
}) => {
  const sizeVariants = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
                ${styles.button[variant]} 
                ${sizeVariants[size]}
                ${
                  disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }
                flex items-center justify-center gap-2
                ${className}
            `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

// Reusable Select Component
const Select = ({
  options,
  onChange,
  placeholder = "Select an option",
  variant = "default",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className={`
                    ${styles.input[variant]}
                    ${
                      disabled
                        ? "bg-gray-100 cursor-not-allowed"
                        : "cursor-pointer"
                    }
                    flex items-center justify-between p-2
                `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDownIcon size={16} />
      </div>

      {isOpen && !disabled && (
        <ul className="absolute z-10 w-full bg-white shadow-lg border rounded-md mt-1">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-3 py-2 hover:bg-gray-100 flex items-center"
              onClick={() => handleSelect(option)}
            >
              {option.label}
              {selectedOption?.value === option.value && (
                <CheckIcon className="ml-auto" size={16} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  variant = "default",
  icon,
  disabled = false,
  error = null,
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
                    w-full p-2 
                    ${icon ? "pl-10" : ""}
                    ${styles.input[variant]}
                    ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
                `}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
