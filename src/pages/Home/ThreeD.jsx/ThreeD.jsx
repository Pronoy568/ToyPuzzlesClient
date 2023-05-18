import React, { useEffect } from "react";
import image from "../../../assets/mixed/threeD.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const ThreeD = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="pb-10 w-10/12 mx-auto">
      <div className="text-4xl mb-3 font-bold text-center">
        <h1>Three-dimensional jigsaw puzzles</h1>
      </div>
      <div className="md:flex justify-center items-center pt-5">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="md:w-5/12 w-11/12 mx-auto"
        >
          <img src={image} alt="image" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          className="md:w-1/2 text-justify w-11/12 mx-auto mt-3 md:mt-0"
        >
          <div className="text-3xl mb-3 font-bold">
            <h1>Puzzles are excellent tools</h1>
          </div>
          <h1 className="text-xl text-slate-500">
            3D puzzles are the most advanced form of puzzles for children, and
            they require a lot of time and concentration to complete. The puzzle
            pieces can be made from either wood, plastic, or foam, and they are
            intended for children aged seven and older.
          </h1>
          <button className="btn btn-outline btn-accent mt-3">
            <a
              href="https://www.amazon.com/dp/B07W5VMW4G/?tag=verbnow-20"
              target="_blank"
            >
              Explore More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeD;
