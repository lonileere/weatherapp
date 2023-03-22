import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useGetLocations } from "../../hooks/useGetLocations";
import Select from "react-select";

interface Props {}

interface Location {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

export const Search: React.FC<Props> = () => {
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const navigate = useNavigate();
  const locationData: Array<Location> = useGetLocations(query);

  const locations: Location[] = locationData.map((location) => {
    return {
      name: location.name,
      lat: location.lat,
      lon: location.lon,
      state: location.state,
      country: location.country,
    };
  });

  const handleInputChange = (input: string) => {
    if (input !== "") {
      setQuery(input);
    }
  };

  return (
    <div className="flex flex-col gap-y-1">
      <header>
        <h1 className="text-6xl mb-4 md:text-7xl">How's the weather?</h1>
      </header>
      <h2 className="mb-2">Search for your city in the input field below</h2>

      <Select<Location>
        className=" w-full mb-2"
        options={locations}
        getOptionLabel={(location: Location) =>
          location.name + ", " + location.state + ", " + location.country
        }
        getOptionValue={(location: Location) =>
          location.name + ", " + location.state + ", " + location.country
        }
        isClearable={true}
        onChange={(option) => {
          setSelectedLocation(option);
        }}
        onInputChange={(input) => handleInputChange(input)}
      ></Select>
      <Button
        tailwind="w-48 self-center"
        onClick={() =>
          selectedLocation !== null &&
          navigate("/results", { state: selectedLocation })
        }
        isDisabled={selectedLocation === null}
      >
        <span className="text-lg">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search
        </span>
      </Button>
    </div>
  );
};
