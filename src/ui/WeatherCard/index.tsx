import React from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  weather: string | undefined;
  temp: number | undefined;
}

export const WeatherCard: React.FC<Props> = ({ weather, temp }) => {
  return (
    <section className="flex">
      <span className={"text-8xl"}>
        {weather}
        <FontAwesomeIcon icon={faCloud} />
      </span>
      <span className={"text-5xl ml-5"}>{temp}°C</span>
    </section>
  );
};
