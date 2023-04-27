import Image from "next/image";
import React from "react";

interface FooterComponentProps {
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string;
  title: string;
}

const FooterComponent = (props: FooterComponentProps) => {
  const { children, title, className, imageSrc } = props;
  return (
    <div className={`text-center w-[300px] h-[150px] relative ${className}`}>
      <h3>{title}</h3>
      <div className="text-sm font-light text-black h-full">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`gambar-${imageSrc}`}
            height={80}
            width={80}
            className="rounded-lg border h-full w-full object-cover shadow-lg"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default FooterComponent;
