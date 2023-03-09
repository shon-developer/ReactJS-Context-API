import React from "react";
import { useContext } from "react";
import { myContext } from "../App";

const UserDetails = () => {
  const data = useContext(myContext);
  return (
    <div>
      <h1>My name is {data.name}</h1>
      <h2>My favorite color is{data.color}</h2>
    </div>
  );
};

export default UserDetails;
