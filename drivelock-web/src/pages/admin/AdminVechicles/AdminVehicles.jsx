// src/pages/admin/AdminVehicles.jsx
import AdminSidebar from "../../../components/Admin/AdminSidebar";
export default function AdminVehicles(){
  return (
    <div className="admin-wrap">
      <AdminSidebar />
      <section className="admin-content">
        <h2>Vehicles</h2>
        <table className="table">
          <thead><tr><th>Plate</th><th>Owner</th><th>Status</th><th>Last GPS</th></tr></thead>
          <tbody>
            <tr><td>ABC-1234</td><td>John Doe</td><td><span className="pill pill-success">Online</span></td><td>6.9271, 79.8612</td></tr>
            <tr><td>DEF-5678</td><td>Jane</td><td><span className="pill pill-danger">Offline</span></td><td>—</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
