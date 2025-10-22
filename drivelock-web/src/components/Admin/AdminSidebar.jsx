import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar({ setIsAdmin, setIsAuthenticated }) {
  const handleLogout = () => {
    // Reset the admin state and authentication status
    setIsAdmin(false);  // Set the user as a normal user
    setIsAuthenticated(false); // Simulate logout (user is no longer authenticated)

    // Redirect to normal user dashboard
    navigate("/dashboard");
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">Admin Panel</div>
      <nav className="admin-nav">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/vehicles">Vehicles</Link>
        <Link to="/admin/alerts">Alerts</Link>
        <Link to="/admin/settings">Settings</Link>
        {/* <Link to="/admin/active-vehicles">Active Vehicles</Link> {/* New link *
        <Link to="/admin/alerts-today">Alerts Today</Link> New link */}
      </nav>

      {/* Logout button */}
      <button className="btn" onClick={handleLogout}>Logout</button>
    </aside>
  );
}
