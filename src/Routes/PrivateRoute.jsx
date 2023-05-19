import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="p-20">
        <SkeletonTheme baseColor="#f3f3f382" highlightColor="#f3f3f382">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center mb-5">
            <Skeleton />
          </h1>
          <p>
            <Skeleton count={10} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
