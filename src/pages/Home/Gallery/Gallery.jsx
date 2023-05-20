import React from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";

const images = [
  "https://i.ibb.co/103Z2DY/g13.jpg",
  "https://i.ibb.co/xjMGMgX/g2.png",
  "https://i.ibb.co/y6C3g7X/g4.png",
  "https://i.ibb.co/YLp6hKL/g6.jpg",
  "https://i.ibb.co/37WqGmg/g3.png",
  "https://i.ibb.co/RpLgTkj/g10.jpg",
  "https://i.ibb.co/jTTVVMF/g9.jpg",
  "https://i.ibb.co/4Wk0CXg/g8.jpg",
  "https://i.ibb.co/0ZcWC17/g7.jpg",
  "https://i.ibb.co/3CZHHwj/g12.jpg",
  "https://i.ibb.co/tJWV2Cy/g11.jpg",
  "https://i.ibb.co/gZW6RkC/g5.png",
];

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    768: 2,
    576: 1,
  };

  return (
    <div>
      <h1 className="text-center text-5xl mb-5 italic font-semibold text-gray-500 underline decoration-base-300 decoration-wavy underline-offset-8">
        Toy Gallery
      </h1>
      <div className="w-4/5 mx-auto mb-10 p-5">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((imageUrl, index) => (
            <div key={index} className="my-masonry-grid_item">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full rounded shadow"
                />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
