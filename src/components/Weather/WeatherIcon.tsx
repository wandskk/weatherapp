import React from "react";

interface WeatherIconProps {
  iconId: string;
}

const WeatherIcon = (props: WeatherIconProps) => {
  const openWeatherImageUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_IMAGE;
  const url = `${openWeatherImageUrl}/${props.iconId}.png`;

  return <img src={url} alt="Imagem do tempo" />;
};

export default WeatherIcon;
