import React from "react";
import { Button } from "../../ui/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface Props {}

export const Search: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1 className="text-6xl mb-4 md:text-7xl">How's the weather?</h1>
      </header>
      <h2 className="mb-2">Search for your city in the input field below</h2>
      <input className=" w-full border border-gray-400 rounded-md outline-gray-500 py-2 px-4 mb-4"></input>
      <Button
        tailwind="w-48 self-center"
        onClick={() => navigate("/results")}
        primary={true}
      >
        <span className="text-xl font-bold">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search
        </span>
      </Button>
    </>
  );
};
