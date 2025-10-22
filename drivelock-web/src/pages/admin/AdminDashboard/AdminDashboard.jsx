import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <Link to="/admin/active-vehicles" className="card">
          <h3>Total Users</h3>
          <p>128</p>
        </Link>
        <Link to="/admin/active-vehicles" className="card">
          <h3>Active Vehicles</h3>
          <p>54</p>
        </Link>
        <Link to="/admin/alerts" className="card">
          <h3>Alerts Today</h3>
          <p>7</p>
        </Link>
      </div>
    </div>
  );
}
