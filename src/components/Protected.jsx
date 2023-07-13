import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Protected({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
}

export default Protected;
