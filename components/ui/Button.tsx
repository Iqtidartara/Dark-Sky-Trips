import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "block py-2 px-4 text-white font-medium bg-[#FF5209] duration-150 hover:bg-[#101010] active:bg-[#101010] rounded-lg border-2 border-orange-500 shadow-lg hover:shadow-none "
      case "secondary":
        return "block py-2 px-4 text-white hover:text-gray-400 font-medium duration-150 active:bg-gray-100  rounded-lg border-2 border-orange-500";
      default:
        return "";
    }
  };

  return (
    <button
      className={`py-2 px-4 rounded-md transition-colors duration-300 ${getVariantClasses()}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
