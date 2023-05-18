import React, { useContext } from "react";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ActiveNav from "./ActiveNav";

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
              <ActiveNav to="/" className="rounded">
                Home
              </ActiveNav>
            </li>
            <li className="mx-4 rounded">
              <ActiveNav to="/allToys" className="rounded">
                All Toys
              </ActiveNav>
            </li>
            <li className="mx-4 rounded">
              <ActiveNav to="/blog" className="rounded">
                Blog
              </ActiveNav>
            </li>
            {user?.email ? (
              <>
                <li className="mx-4 rounded">
                  <ActiveNav to="/myToys" className="rounded">
                    My Toys
                  </ActiveNav>
                </li>
                <li className="mx-4 rounded">
                  <ActiveNav to="/addToy" className="rounded">
                    Add Toys
                  </ActiveNav>
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
                  <ActiveNav to="/login" className="rounded">
                    Login
                  </ActiveNav>
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
