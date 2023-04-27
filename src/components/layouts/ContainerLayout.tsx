import React from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  background?: boolean;
  className?: string;
}

const ContainerLayout = (props: ContainerLayoutProps) => {
  const { children, header, background, className } = props;
  return (
    <>
      <div className="uppercase mb-6 mx-1 text-black/80 text-center font-bold text-xl">
        {header}
      </div>
      <div
        className={`${
          background && "bg-gray-400/10 rounded-2xl space-y-5 text-justify backdrop-blur-md"
        } m-3 mt-10 text-lg px-10 py-7 z-30 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default ContainerLayout;
