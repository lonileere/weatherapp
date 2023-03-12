import { useEffect, useState } from "react";

export const useGetLocations = (query: string) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
    )
      .then((res) => res.json())
      .then(setLocations);
  }, [query]);

  return locations;
};
