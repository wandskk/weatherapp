import React from "react";

interface WeatherTemperatureProps {
  temperature: number;
}

const WeatherTemperature = (props: WeatherTemperatureProps) => {
  return <span>{Math.round(props.temperature)}ºC</span>;
};

export default WeatherTemperature;
