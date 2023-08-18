import React from "react";
import { isLoggin } from ".";
import { Navigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const PrivateRoute = () => {
  return isLoggin() ? <Navbar /> : <Navigate to="/login" />;
};

export default PrivateRoute;
