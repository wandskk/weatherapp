import React from "react";

import "@/styles/Typography/H1.scss";

interface H1Props {
  className?: string;
  children: React.ReactNode | string;
}

const H1 = (props: H1Props) => {
  return <h1 className={`h1 ${props.className ?? ""}`}>{props.children}</h1>;
};

export default H1;
