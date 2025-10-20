import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./GPS.css";

// Fix default marker icons (Vite needs explicit URLs)
const DefaultIcon = L.icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Colombo sample position
const position = [6.9271, 79.8612];

export default function GPS() {
  return (
    <div className="gps-grid">
      <section className="card">
        <header className="card-head"><h3>Vehicle GPS Tracker</h3></header>

        <MapContainer center={position} zoom={14} className="leaflet-box">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Vehicle position</Popup>
          </Marker>
        </MapContainer>

        <div className="latest">
          <h4>Latest Update</h4>
          <div>Latitude: 6.9271° N</div>
          <div>Longitude: 79.8612° E</div>
          <div>Time: 12:45 PM</div>
        </div>
      </section>

      <section className="card">
        <header className="card-head"><h3>Recent GPS Updates</h3></header>
        <table className="table">
          <thead>
            <tr><th>Latitude</th><th>Longitude</th><th>Timestamp</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>6.9271° N</td><td>79.8612° E</td><td>12:45 PM</td><td><span className="pill pill-success">Active</span></td></tr>
            <tr><td>6.9250° N</td><td>79.8600° E</td><td>12:40 PM</td><td><span className="pill pill-info">Idle</span></td></tr>
            <tr><td>6.9222° N</td><td>79.8590° E</td><td>12:35 PM</td><td><span className="pill pill-success">Active</span></td></tr>
            <tr><td>6.9200° N</td><td>79.8585° E</td><td>12:30 PM</td><td><span className="pill pill-danger">No Signal</span></td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
