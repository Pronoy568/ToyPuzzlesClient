import React, { useContext } from "react";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handlerLogout = () => {
    Logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="navbar bg-base-200 flex items-center justify-around flex-wrap">
        <div>
          <img
            className="rounded-full w-11/12 mx-auto md:w-full"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="mt-3 md:mt-0">
          {/* <ul className="menu menu-horizontal"> */}
          <ul className="flex items-center justify-around flex-wrap py-5 md:py-0">
            <li className="mx-4 rounded">
              <Link to="/" className="rounded">
                Home
              </Link>
            </li>
            <li className="mx-4 rounded">
              <Link to="/allToys" className="rounded">
                All Toys
              </Link>
            </li>
            <li className="mx-4 rounded">
              <Link to="/blog" className="rounded">
                Blog
              </Link>
            </li>
            {user?.email ? (
              <>
                <li className="mx-4 rounded">
                  <Link to="/myToys" className="rounded">
                    My Toys
                  </Link>
                </li>
                <li className="mx-4 rounded">
                  <Link to="/addToys" className="rounded">
                    Add Toys
                  </Link>
                </li>
                <li className="mx-4 rounded">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <img
                      className="rounded-full w-20 mt-3 md:mt-0"
                      src={user?.photoURL}
                      alt={user?.email}
                    />
                  </div>
                </li>
                <li className="mx-4 rounded mt-3 md:mt-0">
                  <button onClick={handlerLogout} className="rounded">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="mx-4 rounded">
                  <Link to="/login" className="rounded">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
