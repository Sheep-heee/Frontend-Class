import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../routes/firebase";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  if (!user || user === null) {
    return <Navigate to={"/logtin"} />;
  }
  return children;
};

export default ProtectedRoute;
