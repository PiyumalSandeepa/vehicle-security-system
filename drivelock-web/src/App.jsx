import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Dashboard from "./pages//Dashboard/Dashboard.jsx";
import GPS from "./pages/GPS/GPS.jsx";
import Alarm from "./pages/Alarm/Alarm.jsx";        // ← add
import Security from "./pages/Security/Security.jsx";  // ← add
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gps" element={<GPS />} />
          <Route path="/alarm" element={<Alarm />} />          {/* ← new */}
          <Route path="/security" element={<Security />} />    {/* ← new */}
          <Route path="*" element={<h3 className="notfound">Not Found</h3>} />
        </Routes>
      </main>
    </>
  );
}
