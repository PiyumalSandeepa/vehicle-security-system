import { useState } from "react";
import "./Alarm.css";

export default function Alarm() {
  const [autoMode, setAutoMode] = useState(true);
  const [range, setRange] = useState(120);

  return (
    <div className="alarm-grid">
      {/* Alarm control */}
      <section className="card">
        <header className="card-head">
          <h3>Alarm System</h3>
          <span className="pill pill-success">{autoMode ? "Armed" : "Manual"}</span>
        </header>

        <div className="row">
          <span className="label">Mode</span>
          <div className="toggle">
            <button
              className={!autoMode ? "tbtn active" : "tbtn"}
              onClick={() => setAutoMode(false)}
            >
              Manual
            </button>
            <button
              className={autoMode ? "tbtn active" : "tbtn"}
              onClick={() => setAutoMode(true)}
            >
              Auto
            </button>
          </div>
        </div>

        <div className="row">
          <span className="label">Secure Range</span>
          <div className="range-wrap">
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
            />
            <div className="range-scale">
              <span>0 m</span>
              <b>{range} m</b>
              <span>500 m</span>
            </div>
          </div>
        </div>

        <button className="btn" onClick={() => alert("Alarm Triggered (demo)")}>
          Trigger Alarm
        </button>
      </section>

      {/* Recent updates */}
      <section className="card">
        <header className="card-head"><h3>Recent Updates</h3></header>
        <table className="table">
          <thead>
            <tr><th>Time</th><th>Feature</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>10:32 AM</td><td>Alarm</td><td><span className="pill pill-success">Armed</span></td></tr>
            <tr><td>10:40 AM</td><td>Kill Switch</td><td><span className="pill pill-info">Manual</span></td></tr>
            <tr><td>10:55 AM</td><td>Alarm</td><td><span className="pill pill-danger">Triggered</span></td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
