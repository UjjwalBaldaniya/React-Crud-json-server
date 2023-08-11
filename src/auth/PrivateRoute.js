import React from "react";
import { isLoggin } from ".";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return isLoggin() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
