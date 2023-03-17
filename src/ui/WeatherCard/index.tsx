import React from "react";
import {
  faCloud,
  faSun,
  faCloudRain,
  faThunderstorm,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  weather: string;
  temp: number;
  date: string;
}

const weatherIcon = (weather: string) => {
  switch (weather) {
    case "Rain": {
      return <FontAwesomeIcon icon={faCloudRain} />;
    }
    case "Clouds": {
      return <FontAwesomeIcon icon={faCloud} />;
    }
    case "Clear": {
      return <FontAwesomeIcon icon={faSun} />;
    }
    case "Thunderstorm": {
      return <FontAwesomeIcon icon={faThunderstorm} />;
    }
    case "Drizzle": {
      return <FontAwesomeIcon icon={faCloudRain} />;
    }
    case "Snow": {
      return <FontAwesomeIcon icon={faSnowflake} />;
    }
    default: {
      return <FontAwesomeIcon icon={faSmog} />;
    }
  }
};

export const WeatherCard: React.FC<Props> = ({ weather, temp, date }) => {
  return (
    <section className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 mb-5">
      <span
        className={
          "flex justify-center text-9xl md:col-end-2 md:row-span-2 text-center"
        }
      >
        {weatherIcon(weather)}
      </span>
      <span className={"text-5xl md:text-7xl ml-5 md:col-start-2"}>
        {temp}°C
      </span>
      <span className={"text-3xl md:text-5xl ml-5 md:col-start-2"}>{date}</span>
    </section>
  );
};
