// src/pages/admin/AdminSettings.jsx
import AdminSidebar from "../../../components/Admin/AdminSidebar";
export default function AdminSettings(){
  return (
    <div className="admin-wrap">
      <AdminSidebar />
      <section className="admin-content">
        <h2>Settings</h2>
        <label className="ff" style={{maxWidth:420}}>
          <span>Default Geofence Radius (m)</span>
          <input className="input" type="number" placeholder="100" />
        </label>
        <label className="ff" style={{marginTop:12}}>
          <input type="checkbox" defaultChecked style={{marginRight:8}}/>
          Enable email notifications
        </label>
        <button className="btn" style={{marginTop:14}}>Save</button>
      </section>
    </div>
  );
}
