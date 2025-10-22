import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";  // Optional: Add some custom styles for this page

// Example hardcoded data
const alerts = [
  { id: 1, alertType: "Movement Detected", vehicle: "Tesla Model S", timestamp: "2025-10-22 10:15:30" },
  { id: 2, alertType: "Speed Violation", vehicle: "BMW X5", timestamp: "2025-10-22 11:30:45" },
  { id: 3, alertType: "Geofence Breach", vehicle: "Audi Q7", timestamp: "2025-10-22 12:10:00" },
];

export default function AlertsToday() {
  const navigate = useNavigate();

  return (
    <div className="alerts-today">
      <h2>Alerts Today</h2>
      <table className="alert-table">
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Alert Type</th>
            <th>Vehicle</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.alertType}</td>
              <td>{alert.vehicle}</td>
              <td>{alert.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
