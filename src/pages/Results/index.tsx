import React from "react";
import { WeatherCard } from "../../ui/WeatherCard";

interface Props {}

export const Results: React.FC<Props> = () => {
  return (
    <>
      <h1 className="text-6xl mb-4 md:text-7xl">London, UK</h1>
      <WeatherCard temperature={25} />
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <WeatherCard small temperature={30} />
        <WeatherCard small temperature={35} />
        <WeatherCard small temperature={40} />
        <WeatherCard small temperature={45} />
      </div>
    </>
  );
};
