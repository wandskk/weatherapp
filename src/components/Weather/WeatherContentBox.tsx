import React from "react";

import "@/styles/Weather/WeatherContentBox.scss";

interface WeatherContentBoxProps {
  children: React.ReactNode | string;
}

const WeatherContentBox = (props: WeatherContentBoxProps) => {
  return <div className="weatherContentBox">{props.children}</div>;
};

export default WeatherContentBox;
