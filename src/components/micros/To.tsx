import Link from "next/link";
import React from "react";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const To = (props: LinkProps) => {
  const { children, className, href } = props;
  return (
    <Link
      className={`text-blue-500 hover:text-blue-700 transition-all hover:underline ${
        className && className
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default To;
