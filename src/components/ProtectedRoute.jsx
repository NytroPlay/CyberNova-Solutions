// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
