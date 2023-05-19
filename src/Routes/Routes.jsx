import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

export default Routes;
