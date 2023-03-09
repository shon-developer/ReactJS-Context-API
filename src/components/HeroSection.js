import React from "react";
import UserCard from "./UserCard";

const HeroSection = () => {
  return (
    <div>
      <img
        src="http://source.unsplash.com/random/300x300/?2"
        alt="Random Scene"
      />
      <UserCard />
    </div>
  );
};

export default HeroSection;
