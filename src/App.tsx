import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";
import { Search } from "./pages/Search";

function App() {
  return (
    <>
      <div className="mx-5 flex-1 md:mx-auto flex flex-col max-w-3xl self-center">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
