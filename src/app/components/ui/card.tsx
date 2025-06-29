import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  );
};

export const CardContent: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  );
}; 