import React from "react";

interface SeparatorProps {
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return (
    <div className={`bg-gray-300 h-px w-full ${className ?? ""}`} />
  );
};

export default Separator; 