import React, { useState } from "react";
import { WeatherCard } from "../../ui/WeatherCard";
import { useGetForecast } from "../../hooks/useGetForecast";
import { Button } from "../../ui/Button";
import { time } from "console";

interface Props {}

interface ForecastList {
  weather?: { main: string };
  main?: { temp: number };
}

export const Results: React.FC<Props> = () => {
  const forecastData = useGetForecast(44.34, 10.99);
  const isLoading = forecastData === undefined;
  const [timePeriod, setTimePeriod] = useState(0);

  if (isLoading) return <span>loading</span>;

  const { city, list } = forecastData;

  let forecastList = list as Array<ForecastList>;

  console.log(forecastList);

  return (
    <>
      <h1 className="text-6xl mb-4 md:text-7xl">
        {city?.name}, {city?.county} {city?.country},
      </h1>
      <WeatherCard
        weather={forecastList[timePeriod]?.weather?.main}
        temp={forecastList[timePeriod]?.main?.temp}
      />
      <Button
        isDisabled={timePeriod === 0}
        onClick={() => setTimePeriod(timePeriod - 1)}
      >
        {" "}
        {"<"}{" "}
      </Button>
      <Button
        isDisabled={timePeriod === 40}
        onClick={() => setTimePeriod(timePeriod + 1)}
      >
        {" "}
        {">"}{" "}
      </Button>
      <Button onClick={() => setTimePeriod(0)}> Reset </Button>
    </>
  );
};
