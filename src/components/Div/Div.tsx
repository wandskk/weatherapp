import React from "react";

export interface DivProps {
  children: React.ReactNode | string;
  className?: string;
}

const Div = (props: DivProps) => {
  return <div className={props.className ?? ""}>{props.children}</div>;
};

export default Div;
