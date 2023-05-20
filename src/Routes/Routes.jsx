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
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/share/Error/Error";
import Blog from "../pages/Blog/Blog";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <SingleToyInfo></SingleToyInfo>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/toy/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/toy/update/:id",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/toy/${params.id}`),
      },
    ],
  },
]);

export default Routes;
