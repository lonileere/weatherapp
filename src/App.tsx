import React from "react";
import { Button } from "./ui/Button";
import "./App.css";

function App() {
  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="mx-auto flex flex-col w-full max-w-3xl">
          <header>
            <h1 className="text-6xl mb-4 md:text-7xl">What's the weather?</h1>
          </header>
          <h2 className="mb-2">
            Search for your city in the input field below
          </h2>
          <input className="border border-gray-400 rounded-md outline-gray-500 py-2 px-4 mb-4"></input>
          <Button
            tailwind="w-48 self-center"
            onClick={() => null}
            primary={true}
          >
            <span className="text-xl">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
