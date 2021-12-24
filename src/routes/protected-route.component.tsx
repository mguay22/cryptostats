import React from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../slices/auth.slice";

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const user = useAppSelector((state) => selectCurrentUser(state));

  return user ? children : <Navigate to="/login" />;
};

export { ProtectedRoute };
