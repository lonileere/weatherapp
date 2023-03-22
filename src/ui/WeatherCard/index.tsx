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
    <section className="grid grid-rows-3 items-center grid-cols-1 md:grid-cols-2 md:grid-rows-2 mb-5">
      <span className={"text-7xl md:text-7xl md:col-start-2 text-center"}>
        {temp}°C
      </span>
      <div className="flex flex-col md:row-span-2 md:row-end-1 items-center">
        <span className={"flex justify-center text-9xl  text-center"}>
          {weatherIcon(weather)}
        </span>
        <span className="text-xl">{weather}</span>
      </div>

      <span className={"text-3xl md:text-5xl md:col-start-2 text-center"}>
        {date}
      </span>
    </section>
  );
};
