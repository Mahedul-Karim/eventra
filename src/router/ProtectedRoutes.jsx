import { useStore } from "@/context/Context";
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoutes;
