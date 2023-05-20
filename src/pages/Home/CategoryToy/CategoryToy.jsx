import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const CategoryToy = () => {
  const [logicCategory, setLogicCategory] = useState([]);
  const [threeDCategory, setThreeDCategory] = useState([]);
  const [woodenCategory, setWoodenCategory] = useState([]);

  const url = `https://toy-puzzles-server.vercel.app/toys`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const LogicToys = data.filter((toy) => toy.category === "Logic");
        const ThreeDToys = data.filter((toy) => toy.category === "3D");
        const WoodenToys = data.filter((toy) => toy.category === "Wooden");
        setLogicCategory(LogicToys);
        setThreeDCategory(ThreeDToys);
        setWoodenCategory(WoodenToys);
      });
  }, [url]);

  return (
    <section className="w-4/5 mx-auto text-center my-10">
      <h1 className="mb-10 text-5xl font-bold underline text-gray-600 decoration-gray-200 decoration-wavy underline-offset-8">
        Toy By Category
      </h1>
      <Tabs className="border-2 rounded-xl">
        <TabList className="border-2 rounded-xl">
          <div className="text-xl font-medium bg-slate-100 rounded-xl">
            <Tab>Logic</Tab>
            <Tab>3D</Tab>
            <Tab>Wooden</Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
              {logicCategory.map((logic) => (
                <ToyCard key={logic._id} toyCard={logic}></ToyCard>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
              {threeDCategory.map((threeD) => (
                <ToyCard key={threeD._id} toyCard={threeD}></ToyCard>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
              {woodenCategory.map((wooden) => (
                <ToyCard key={wooden._id} toyCard={wooden}></ToyCard>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryToy;
