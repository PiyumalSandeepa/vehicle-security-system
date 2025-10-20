import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dash-grid">
      {/* GPS */}
      <section className="card">
        <header className="card-head"><h3>GPS Location</h3></header>
        <div className="box-muted">Map Preview</div>
        <p className="meta">Status: <span className="pill pill-success">Connected</span></p>
        <p className="meta">Speed: 42 km/h</p>
        <p className="meta">Last Update: 12:45 PM at 40.753°N, 73.983°W</p>
      </section>

      {/* Alarm */}
      <section className="card">
        <header className="card-head">
          <h3>Alarm System</h3>
          <span className="pill pill-success">Armed</span>
        </header>
        <p className="meta">Mode: <b>Auto</b></p>
        <button className="btn" style={{marginTop:12}}>Trigger Alarm</button>
      </section>

      {/* Camera */}
      <section className="card">
        <header className="card-head"><h3>Camera Preview</h3></header>
        <div className="box-muted">Live Camera Stream</div>
        <p className="meta">Status: Streaming · Last Alert: Unknown object at 12:40 PM</p>
      </section>

      {/* Status bar */}
      <section className="card full">
        <div className="status-row">
          <span className="pill pill-success">Online (Wi-Fi)</span>
          <span className="pill pill-info">Signal: Strong</span>
          <span className="pill pill-info">Battery: 87%</span>
          <span className="pill pill-info">Last Sync: 12:45 PM</span>
        </div>
      </section>
    </div>
  )
}
