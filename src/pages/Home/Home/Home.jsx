import React from "react";
import Banner from "../Banner/Banner";
import ToyTypes from "../ToyTypes/ToyTypes";
import ThreeD from "../ThreeD.jsx/ThreeD";
import CategoryToy from "../CategoryToy/CategoryToy";
import Gallery from "../Gallery/Gallery";
import UseTitle from "../../share/UseTitle/UseTitle";

const Home = () => {
  UseTitle("");
  return (
    <div>
      <Banner></Banner>
      <ToyTypes></ToyTypes>
      <CategoryToy></CategoryToy>
      <ThreeD></ThreeD>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
