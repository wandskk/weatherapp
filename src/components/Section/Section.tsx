import React from "react";

import "@/styles/Section/Section.scss";

export interface SectionProps {
  children: React.ReactNode | string;
  className?: string;
}

const Section = (props: SectionProps) => {
  return (
    <section className={`section ${props.className ?? ""}`}>
      {props.children}
    </section>
  );
};

export default Section;
