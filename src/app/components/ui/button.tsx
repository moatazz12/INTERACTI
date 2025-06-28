import React from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 transition ${className}`}
      {...props}
    />
  );
}; 