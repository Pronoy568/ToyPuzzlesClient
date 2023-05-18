import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);

export default Routes;
