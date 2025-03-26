import React from "react";

import "@/styles/Container/Container.scss";

export interface ContainerProps {
  children: React.ReactNode | string;
  className?: string;
}

const Container = (props: ContainerProps) => {
  return (
    <div className={`container ${props.className ?? ""}`}>{props.children}</div>
  );
};

export default Container;
