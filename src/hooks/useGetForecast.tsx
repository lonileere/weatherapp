import { useEffect, useState } from "react";

interface ForecastProps {
  city: { name: string; country: string; county: string };
  list: {
    weather: { main: string }[];
    main: { temp: number };
    dt_txt: string;
  }[];
}

export const useGetForecast = (lat: number, lon: number) => {
  const [data, setData] = useState<ForecastProps | undefined>(undefined);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=ad19471b1f7c5ec3d4ff847f88e94f14`
    )
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Invalid Co-ordinates");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setData(undefined);
      });
  }, [lat, lon]);

  return data;
};
