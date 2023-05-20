import React from "react";
import NotFound from "../../../assets/mixed/NotFound.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div>
        <img src={NotFound} alt="NotFound" />
        <button className="btn btn-active btn-ghost">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
