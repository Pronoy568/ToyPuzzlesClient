import React from "react";
import { Link } from "react-router-dom";

const AllToyDataShow = ({ allToy }) => {
  const { _id, ToyName, price, category, quantity, image } = allToy;

  return (
    <tr className="border-4 border-gray-200 border-double">
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={ToyName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{ToyName}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-active btn-ghost">
          <Link to={`/toy/${_id}`}>View details</Link>
        </button>
      </td>
    </tr>
  );
};

export default AllToyDataShow;
