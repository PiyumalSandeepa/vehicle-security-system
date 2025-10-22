import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import AdminSidebar from "./components/Admin/AdminSidebar.jsx"; // Corrected path

// App pages
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import GPS from "./pages/GPS/GPS.jsx";
import Alarm from "./pages/Alarm/Alarm.jsx";
import Security from "./pages/Security/Security.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

// Admin guard + pages
import AdminRoute from "./guards/AdminRoute.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard.jsx"; // Correct path
import AdminUsers from "./pages/admin/AdminUsers/AdminUsers.jsx"; // Correct path
import AdminVehicles from "./pages/admin/AdminVechicles/AdminVehicles.jsx"; // Correct path
import ActiveVehicles from "./pages/admin/AdminVechicles/AdminVehicles.jsx"; // Correct path for Active Vehicles
import AdminAlerts from "./pages/admin/AdminAlerts/AdminAlerts.jsx"; // Correct path
import AlertsToday from "./pages/admin/AdminDashboard/AlertsToday.jsx"; // Correct path for Alerts Today
import AdminSettings from "./pages/admin/AdminSettings/AdminSettings.jsx"; // Correct path
import "./index.css";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false); // False means normal user, true means admin
  const [isAuthenticated, setIsAuthenticated] = useState(false); // User logged in or not

  return (
    <>
      {/* Conditionally render the Admin Sidebar for Admin or the normal Navbar for public routes */}
      {isAdmin ? <AdminSidebar setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} /> : <Navbar />}
      
      <main className="container">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gps" element={<GPS />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/security" element={<Security />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin routes (protected) */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsers />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/vehicles"
            element={
              <AdminRoute>
                <AdminVehicles />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/active-vehicles"
            element={
              <AdminRoute>
                <ActiveVehicles />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/alerts"
            element={
              <AdminRoute>
                <AdminAlerts />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/alerts-today"
            element={
              <AdminRoute>
                <AlertsToday />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <AdminRoute>
                <AdminSettings />
              </AdminRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<h3 className="notfound">Not Found</h3>} />
        </Routes>
      </main>
    </>
  );
}
