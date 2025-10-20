import { useState } from "react";
import "./Security.css";

export default function Security() {
  const [killSwitch, setKillSwitch] = useState(false);
  const [fuelPump, setFuelPump] = useState(true);
  const [pin, setPin] = useState("");

  return (
    <div className="sec-grid">
      {/* Kill Switch */}
      <section className="card">
        <header className="card-head"><h3>Kill Switch</h3></header>
        <p className="meta">
          Remotely prevent engine start. Use with caution.
        </p>

        <div className="switch-row">
          <span>Status</span>
          <button
            className={`switch ${killSwitch ? "on" : "off"}`}
            onClick={() => setKillSwitch((v) => !v)}
          >
            {killSwitch ? "Enabled" : "Disabled"}
          </button>
        </div>
      </section>

      {/* Fuel Pump */}
      <section className="card">
        <header className="card-head"><h3>Fuel Pump Control</h3></header>
        <p className="meta">Cut fuel line to immobilize vehicle (demo only).</p>

        <div className="switch-row">
          <span>Status</span>
          <button
            className={`switch ${fuelPump ? "on" : "off"}`}
            onClick={() => setFuelPump((v) => !v)}
          >
            {fuelPump ? "Enabled" : "Disabled"}
          </button>
        </div>
      </section>

      {/* Security PIN & Notifications */}
      <section className="card full">
        <header className="card-head"><h3>Security Settings</h3></header>

        <div className="form-grid">
          <label className="ff">
            <span>Security PIN</span>
            <input
              className="input"
              type="password"
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </label>

          <label className="ff checkbox">
            <input type="checkbox" defaultChecked/>
            <span>Enable notifications (email/SMS)</span>
          </label>
        </div>

        <button className="btn" onClick={() => alert("Saved (demo)")}>
          Save Changes
        </button>
      </section>
    </div>
  );
}
