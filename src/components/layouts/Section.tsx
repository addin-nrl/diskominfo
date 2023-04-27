import React from "react";

interface SectionProps {
  children: React.ReactNode;
  header?: string;
  subHeader?: string;
  className?: string;
  headerClass?: string;
}

const Section = (props: SectionProps) => {
  const { children, subHeader, header, className, headerClass } = props;
  return (
    <section className={`${className} font-serif`}>
      {header && (
        <h1
          className={`text-2xl uppercase font-bold text-blue-500 ${headerClass}`}
        >
          {header}
        </h1>
      )}
      {subHeader && <p className="text-sm font-normal text-black/40">{subHeader}</p>}
      {children}
    </section>
  );
};

export default Section;
