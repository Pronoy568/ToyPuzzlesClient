import React from "react";
import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.jpg";
import img3 from "../../../assets/banner/3.jpg";
import img4 from "../../../assets/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full md:h-[650px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl from-[#272727] to-[rgba(21,21,21,0)]">
          <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
            <h2 className="md:text-5xl text-3xl font-bold">
              A puzzle is a game, problem, or toy
            </h2>
            <p className="md:text-xl text-sm">
              Puzzle play is a great time to build cognitive and fine motor
              skills and It build <br /> social, emotional, and language skills.
            </p>
            <div className="md:pb-0 pb-5">
              <button className="btn btn-accent  mr-5">Latest Project</button>
              <button className="btn btn-outline btn-warning">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl from-[#272727] to-[rgba(21,21,21,0)]">
          <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
            <h2 className="md:text-5xl text-2xl font-bold">
              Puzzles develop memory skills <br /> and solve problems.
            </h2>
            <p className="md:text-xl text-sm">
              While completing a puzzle, children need to remember <br />{" "}
              shapes, colours, positions and strategies to <br /> complete them.
            </p>
            <div className="md:pb-0 pb-5">
              <button className="btn btn-accent  mr-5">Latest Project</button>
              <button className="btn btn-outline btn-warning">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl from-[#272727] to-[rgba(21,21,21,0)]">
          <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-4/5 md:w-3/4 mx-auto md:text-right text-center">
            <h2 className="md:text-5xl text-3xl font-bold">
              brain benefits of puzzles
            </h2>
            <p className="md:text-xl text-sm">
              One of the brain benefits of puzzles is that they
              <br /> increase the production of dopamine.
            </p>
            <div className="md:pb-0 pb-5">
              <button className="btn btn-accent  mr-5">Latest Project</button>
              <button className="btn btn-outline btn-warning">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl from-[#272727] to-[rgba(21,21,21,0)]">
          <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-4/5 md:w-3/4 mx-auto md:text-right text-center">
            <h2 className="md:text-5xl text-3xl font-bold">
              Puzzle games help Our brain
            </h2>
            <p className="md:text-xl text-sm">
              Anything that challenges your mind or jogs your <br /> memory is
              going to be good for you.
            </p>
            <div className="md:pb-0 pb-5">
              <button className="btn btn-accent  mr-5">Latest Project</button>
              <button className="btn btn-outline btn-warning">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
