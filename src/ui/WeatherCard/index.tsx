import React from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  temperature: number;
  small?: boolean;
}

export const WeatherCard: React.FC<Props> = ({ temperature, small }) => {
  return (
    <section className="flex">
      <span className={small ? "text-4xl" : "text-8xl"}>
        <FontAwesomeIcon icon={faCloud} />
      </span>
      <span className={small ? "text-4xl ml-2" : "text-5xl ml-5"}>
        {temperature}°C
      </span>
    </section>
  );
};
