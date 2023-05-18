import React, { useEffect } from "react";
import img1 from "../../../assets/types/1.jpg";
import img2 from "../../../assets/types/2.jpg";
import img3 from "../../../assets/types/3.jpg";
import img4 from "../../../assets/types/4.jpg";
import img5 from "../../../assets/types/5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const ToyTypes = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="md:text-5xl text-4xl mb-3 font-bold">
          Types of Puzzles Toy
        </h1>
        <p className="text-slate-500 md:text-base text-sm">
          Boost kids mental acuity with addictive activities that'll have them
          twisting and <br /> turning, plotting, planning and piecing pictures
          together.
        </p>
      </div>

      <div className="grid md:grid-cols-5 md:gap-4 gap-0 grid-cols-1 text-center mt-5">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="justify-self-center border-4 rounded md:mx-2 md:mt-0 mt-3 bg-base-200"
        >
          <img src={img1} alt="image" />
          <h1 className="text-2xl pb-2">3D Puzzles</h1>
        </div>
        <div
          data-aos="flip-down"
          data-aos-easing="ease-out-sine"
          className="justify-self-center border-4 rounded md:mx-2 md:mt-0 mt-3 bg-base-200"
        >
          <img src={img2} alt="image" />
          <h1 className="text-2xl pb-2">Brain Puzzles</h1>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          className="justify-self-center border-4 rounded md:mx-2 md:mt-0 mt-3 bg-base-200"
        >
          <img src={img3} alt="image" />
          <h1 className="text-2xl pb-2">Floor Puzzles</h1>
        </div>
        <div
          data-aos="flip-up"
          data-aos-easing="ease-out-sine"
          className="justify-self-center border-4 rounded md:mx-2 md:mt-0 mt-3 bg-base-200"
        >
          <img src={img4} alt="image" />
          <h1 className="text-2xl pb-2">Jigsaw Puzzles</h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          className="justify-self-center border-4 rounded md:mx-2 md:mt-0 mt-3 bg-base-200"
        >
          <img src={img5} alt="image" />
          <h1 className="text-2xl pb-2">Wooden Puzzles</h1>
        </div>
      </div>
    </div>
  );
};

export default ToyTypes;
