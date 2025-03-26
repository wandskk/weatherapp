import React from "react";

import "@/styles/Typography/H2.scss";

interface H2Props {
  className?: string;
  children: React.ReactNode | string;
}

const H2 = (props: H2Props) => {
  return <h2 className={`h2 ${props.className ?? ""}`}>{props.children}</h2>;
};

export default H2;
