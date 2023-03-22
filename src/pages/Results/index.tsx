import React, { useState } from "react";
import { WeatherCard } from "../../ui/WeatherCard";
import { useGetForecast } from "../../hooks/useGetForecast";
import { Button } from "../../ui/Button";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {}

interface ForecastList {
  weather: Array<{ main: string }>;
  main: { temp: number };
  dt_txt: string;
}

export const Results: React.FC<Props> = () => {
  const { state } = useLocation();
  const forecastData = useGetForecast(state.lat, state.lon);
  const isLoading = forecastData === undefined;
  const [timePeriod, setTimePeriod] = useState(0);

  if (isLoading) return <span>loading</span>;

  const { city, list } = forecastData;

  const buildCountryString = (
    name: string,
    county: string,
    country: string
  ) => {
    return `${name !== undefined ? name : ""}${
      county !== undefined ? ", " + county : ""
    }${country !== undefined ? ", " + country : ""}`;
  };

  let forecastList = list as Array<ForecastList>;

  return (
    <div className="flex flex-col md:space-y-8">
      <div className="flex flex-row gap-x-2 justify-between align-baseline">
        <h1 className="text-xl mb-4 md:text-7xl">
          {buildCountryString(city.name, city.county, city.country)}
        </h1>
        <Link to="/">
          <FontAwesomeIcon
            className="text-2xl md:text-6xl"
            icon={faArrowCircleLeft}
          />
        </Link>
      </div>

      <WeatherCard
        weather={forecastList[timePeriod].weather[0].main}
        temp={forecastList[timePeriod].main.temp}
        date={forecastList[timePeriod].dt_txt}
      />
      <div className="flex flex-row w-full space-x-3">
        <Button
          isDisabled={timePeriod === 0}
          onClick={() => setTimePeriod(timePeriod - 1)}
          tailwind="w-full"
        >
          {"-3hrs"}
        </Button>
        <Button
          isDisabled={timePeriod === 0}
          onClick={() => setTimePeriod(0)}
          tailwind="w-full"
        >
          {" "}
          Current{" "}
        </Button>
        <Button
          isDisabled={timePeriod === 39}
          onClick={() => setTimePeriod(timePeriod + 1)}
          tailwind="w-full"
        >
          {"+3hrs"}
        </Button>
      </div>
    </div>
  );
};
