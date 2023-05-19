import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import SingleToyInfo from "../pages/SingleToyInfo/SingleToyInfo";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

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
      {
        path: "/toy/:id",
        element: <SingleToyInfo></SingleToyInfo>,
        loader: ({ params }) => fetch(`http://localhost:3000/toy/${params.id}`),
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/toy/update/:id",
        element: <UpdateToy />,
        loader: ({ params }) => fetch(`http://localhost:3000/toy/${params.id}`),
      },
    ],
  },
]);

export default Routes;
