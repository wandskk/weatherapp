"use client";

import React from "react";

import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import SearchInput from "@/components/SearchInput/SearchInput";
import H1 from "@/components/Typography/H1";
import WeatherContent from "@/components/Weather/WeatherContent";

import { WeatherServices } from "@/services/weather";
import { WeatherData } from "@/core/model/WeatherData";

import "@/app/page.scss";

const Page = () => {
  const [weather, setWeather] = React.useState<WeatherData>();
  const searchRef = React.useRef<HTMLInputElement>(null);

  const getWeatherData = React.useCallback(async (text: string = "") => {
    const cityName = text.trim() || "Sao Paulo";
    const data = await WeatherServices.getWeatherByCityName(cityName);
    if (data) setWeather(data);
  }, []);

  const getSearch = () =>
    searchRef.current && getWeatherData(searchRef.current.value);

  React.useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  React.useEffect(() => console.log(weather), [weather]);

  return (
    <Section className="page__section">
      <Container className="page__container">
        <H1 className="page__title">Clima Agora</H1>
        <SearchInput
          ref={searchRef}
          placeholder="Digite o nome da cidade"
          onClick={getSearch}
        />
        {weather && <WeatherContent data={weather} />}
      </Container>
    </Section>
  );
};

export default Page;
