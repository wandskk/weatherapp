import React from "react";

import "@/styles/Typography/Paragraph.scss";

interface ParagraphProps {
  className?: string;
  children: React.ReactNode | string;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <p className={`paragraph ${props.className ?? ""}`}>{props.children}</p>
  );
};

export default Paragraph;
