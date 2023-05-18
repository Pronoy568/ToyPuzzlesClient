import React from "react";
import logo from "../../../assets/logo7.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200 flex items-center justify-around flex-wrap">
        <div className="">
          <img
            className="rounded-full w-11/12 mx-auto md:w-full"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="mt-3 md:mt-0">
          <ul className="menu menu-horizontal">
            <li className="mx-1 rounded-full">
              <Link to="/" className="rounded-full">
                Home
              </Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link to="/allToys" className="rounded-full">
                All Toys
              </Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link to="/myToys" className="rounded-full">
                My Toys
              </Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link to="/addToys" className="rounded-full">
                Add Toys
              </Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link to="/blog" className="rounded-full">
                Blog
              </Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link to="/login" className="rounded-full">
                Login
              </Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link className="rounded-full">Logout</Link>
            </li>
            <li className="mx-1 rounded-full">
              <Link className="rounded-full">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
