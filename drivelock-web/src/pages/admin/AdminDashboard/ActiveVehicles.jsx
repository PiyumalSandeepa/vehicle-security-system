import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";  // Optional: Add some custom styles for this page

// Example hardcoded data
const activeVehicles = [
  { id: 1, model: "Tesla Model S", status: "Active", location: "Downtown", speed: "50 km/h" },
  { id: 2, model: "BMW X5", status: "Active", location: "City Center", speed: "60 km/h" },
  { id: 3, model: "Audi Q7", status: "Active", location: "Airport", speed: "45 km/h" },
];

export default function ActiveVehicles() {
  const navigate = useNavigate();

  return (
    <div className="active-vehicles">
      <h2>Active Vehicles</h2>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Status</th>
            <th>Location</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
          {activeVehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.status}</td>
              <td>{vehicle.location}</td>
              <td>{vehicle.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
