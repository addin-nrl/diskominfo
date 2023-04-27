import React from "react";

interface Dropdown {
  children: React.ReactNode;
  className?: string;
  arrowClass?: string;
}

const Dropdown = (props: Dropdown) => {
  const { children, className, arrowClass } = props;
  return (
    <div
      className={`bg-white/80 p-1 !backdrop-blur-md text-blue-400 absolute hidden w-[250px] z-50 rounded-md shadow-md transition-all text-sm ${className}`}
    >
      {children}
      <div className={`w-0 h-0 absolute backdrop-blur-md border-white/90 ${arrowClass}`} />
    </div>
  );
};

export default Dropdown;
