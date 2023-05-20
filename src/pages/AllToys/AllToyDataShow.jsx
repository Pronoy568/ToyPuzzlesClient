import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllToyDataShow = ({ allToy }) => {
  const { user } = useContext(AuthContext);
  const { _id, ToyName, price, category, quantity, image } = allToy;

  const messageLogin = () => {
    toast(`you have to log in first to view details`);
  };

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
        {user ? (
          <button className="btn btn-active btn-ghost">
            <Link to={`/toy/${_id}`}>View details</Link>
          </button>
        ) : (
          <button className="btn btn-active btn-ghost" onClick={messageLogin}>
            <Link to={`/toy/${_id}`}>View details</Link>
          </button>
        )}
        <ToastContainer />
      </td>
    </tr>
  );
};

export default AllToyDataShow;
