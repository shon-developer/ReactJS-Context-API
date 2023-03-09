import React from "react";
import { useContext } from "react";
import { myContext } from "../App";

const Colors = () => {
  const data = useContext(myContext);
  return (
    <div className="Colors">
      <h1 style={{ backgroundColor: data.color }}>Colors</h1>
    </div>
  );
};

export default Colors;
