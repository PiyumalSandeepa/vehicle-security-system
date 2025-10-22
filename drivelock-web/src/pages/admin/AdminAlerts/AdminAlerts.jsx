// src/pages/admin/AdminAlerts.jsx
import AdminSidebar from "../../../components/Admin/AdminSidebar";
export default function AdminAlerts(){
  return (
    <div className="admin-wrap">
      <AdminSidebar />
      <section className="admin-content">
        <h2>Alerts</h2>
        <div style={{display:'flex', gap:10, marginBottom:12}}>
          <select className="input"><option>All severities</option><option>High</option><option>Medium</option><option>Low</option></select>
          <input className="input" type="date" />
        </div>
        <table className="table">
          <thead><tr><th>Time</th><th>Vehicle</th><th>Type</th><th>Severity</th></tr></thead>
          <tbody>
            <tr><td>10:55</td><td>ABC-1234</td><td>Alarm Trigger</td><td><span className="pill pill-danger">High</span></td></tr>
            <tr><td>10:40</td><td>DEF-5678</td><td>Geofence</td><td><span className="pill pill-info">Low</span></td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
