import React from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const ContainerLayout = (props: ContainerLayoutProps) => {
  const { children, header } = props;
  return (
    <>
      <div className="uppercase my-6 mx-1 text-black/80 text-center font-bold text-xl">
        {header}
      </div>
      <div className="bg-gray-400/10 backdrop-blur-md m-3 p-5 text-justify space-y-5 rounded-2xl">
        {children}
      </div>
    </>
  );
};

export default ContainerLayout;
