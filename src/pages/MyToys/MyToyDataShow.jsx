import React from "react";
import { Link } from "react-router-dom";

const MyToyDataShow = ({ myToy }) => {
  const { _id, ToyName, price, category, quantity, image } = myToy;

  return (
    <tr className="border-2 border-gray-200 border-dashed">
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
          <Link to={`/toy/${_id}`}>Update</Link>
        </button>
      </td>
      <td>
        <button className="btn btn-active btn-circle">
          <Link to={`/toy/${_id}`}>X</Link>
        </button>
      </td>
    </tr>
  );
};

export default MyToyDataShow;
