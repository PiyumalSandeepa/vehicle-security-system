import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="nav-left" onClick={() => navigate("/dashboard")}>
        <span className="brand">DriveLock</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/dashboard" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          Dashboard
        </NavLink>
        <NavLink to="/gps" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          GPS
        </NavLink>
        {/* NEW */}
        <NavLink to="/alarm" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          Alarm
        </NavLink>
        <NavLink to="/security" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          Security
        </NavLink>
      </nav>

      <button className="nav-btn" onClick={() => alert("TODO: auth")}>Login</button>
    </header>
  );
}
