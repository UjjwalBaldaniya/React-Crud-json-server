import React from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserList from "../Pages/UserList";
import AddData from "../Pages/AddData";
import EditData from "../Pages/EditData";
import Login from "../Pages/Login";

const RouterArray = () => {
  let Main = useRoutes([
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <UserList />,
        },
        {
          path: "/home",
          element: <UserList />,
        },
        {
          path: "/addData",
          element: <AddData />,
        },
        {
          path: "/editData/:id",
          element: <EditData />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return Main;
};

export default RouterArray;
