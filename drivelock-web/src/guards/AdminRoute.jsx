// src/guards/AdminRoute.jsx
import { Navigate } from "react-router-dom";

// Simulated user state, use real authentication here
const isAuthenticated = true; // This would be based on actual auth state
const isAdmin = true; // Replace with real check for admin

export default function AdminRoute({ children }) {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;
  return children;
}
