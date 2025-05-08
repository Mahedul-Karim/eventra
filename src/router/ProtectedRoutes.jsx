import Loader from "@/components/common/Loader";
import { useStore } from "@/context/Context";
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user, isLoading } = useStore();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoutes;
