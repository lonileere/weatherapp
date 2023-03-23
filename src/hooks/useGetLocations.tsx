import { useEffect, useState } from "react";

export const useGetLocations = (query: string) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=ad19471b1f7c5ec3d4ff847f88e94f14`
    )
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Invalid Search Term");
        }
        return res.json();
      })
      .then((data) => {
        setLocations(data);
      })
      .catch((err) => {
        setLocations([]);
      });
  }, [query]);

  return locations;
};
