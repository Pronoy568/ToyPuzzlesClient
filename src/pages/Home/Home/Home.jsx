import React from "react";
import Banner from "../Banner/Banner";
import ToyTypes from "../ToyTypes/ToyTypes";
import ThreeD from "../ThreeD.jsx/ThreeD";
import CategoryToy from "../CategoryToy/CategoryToy";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ToyTypes></ToyTypes>
      <CategoryToy></CategoryToy>
      <ThreeD></ThreeD>
    </div>
  );
};

export default Home;
