"use client";

import Image from "next/image";
import React from "react";

interface RenderIconProps {
  icon: string | React.ReactNode;
  alt?: string;
  size?: number;
}

const RenderIcon: React.FC<RenderIconProps> = React.memo(({ icon, alt = "icon", size = 40 }) => {
  if (typeof icon === "string") {
    return (
      <Image
        src={icon}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        loading={alt.toLowerCase().includes("hero") ? "eager" : "lazy"}
      />
    );
  }
  return <>{icon}</>;
});

export default RenderIcon;
