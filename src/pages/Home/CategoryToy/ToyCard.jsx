import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toyCard }) => {
  const { _id, ToyName, price, rating, image } = toyCard;
  return (
    <div className="md:m-10 my-7 shadow-xl shadow-gray-300 rounded-xl bg-gray-100">
      <div className="card w-80 glass h-full p-4">
        <figure>
          <img className="w-2/4 h-36" src={image} alt={ToyName} />
        </figure>
        <div>
          <h1 className="text-xl mt-2 font-medium">{ToyName}</h1>
          <p className="my-1">
            <span className="font-medium">Price: </span>
            {price}
          </p>
          <p className="mb-1">
            <span className="font-medium">Rating: </span>
            {rating}
          </p>
          <div className="card-action">
            <button className="btn btn-active btn-ghost">
              <Link to={`/toy/${_id}`}>View details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
