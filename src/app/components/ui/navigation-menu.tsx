import React from "react";
import Link from "next/link";

export function NavigationMenu({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <nav className={className}>{children}</nav>;
}

export function NavigationMenuList({ children, className }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={className}>{children}</ul>;
}

export function NavigationMenuItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export function NavigationMenuLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
} 