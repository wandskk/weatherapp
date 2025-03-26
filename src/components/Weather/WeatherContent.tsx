import React from "react";

import WeatherIcon from "@/components/Weather/WeatherIcon";
import WeatherTemperature from "@/components/Weather/WeatherTemperature";
import Div from "@/components/Div/Div";
import H2 from "@/components/Typography/H2";
import Paragraph from "@/components/Typography/Paragraph";

import { WeatherData } from "@/core/model/WeatherData";

import "@/styles/Weather/WeatherContent.scss";

interface WeatherContentProps {
  data: WeatherData;
}

const WeatherContent = (props: WeatherContentProps) => {
  const { data } = props;
  const weatherDetails = data.weather[0];

  return (
    <Div className="weatherContent">
      <H2 className="weatherContent__title">{data.name}</H2>
      <Div className="weatherContent__info">
        <WeatherIcon iconId={weatherDetails.icon} />
        <Paragraph className="weatherContent__temperature">
          <WeatherTemperature temperature={data.main.temp} />
        </Paragraph>
      </Div>

      <Paragraph className="weatherContent__description">
        {weatherDetails.description}
      </Paragraph>

      <Div className="weatherContent__details">
        <Paragraph>
          Sensação Térmica:{" "}
          <WeatherTemperature temperature={data.main.feels_like} />
        </Paragraph>
        <Paragraph>Umidade: {data.main.humidity}%</Paragraph>
        <Paragraph>Pressão: {data.main.pressure}</Paragraph>
      </Div>
    </Div>
  );
};

export default WeatherContent;
