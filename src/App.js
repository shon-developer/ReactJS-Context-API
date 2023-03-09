import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createContext } from "react";
import HeroSection from "./components/HeroSection";

export const myContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const myName = (event) => {
    setName(event.target.value);
  };

  const myColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <myContext.Provider value={{ name, color }}>
      <Navbar />
      <form className="form">
        <input
          type={"text"}
          placeholder="Enter your Name"
          value={name}
          onChange={myName}
        />
        <input
          type={"text"}
          placeholder="Enter your favorite color"
          value={color}
          onChange={myColor}
        />
      </form>
      <HeroSection />
    </myContext.Provider>
  );
}

export default App;
