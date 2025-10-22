// src/pages/auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { Link } from "react-router-dom";

export default function Login({ setIsAdmin, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");

    // Simulating admin and normal user login with hardcoded values
    if (form.email === "admin@admin.com" && form.password === "admin123") {
      setIsAdmin(true); // Set to true for admin
      setIsAuthenticated(true);
      navigate("/admin/dashboard"); // Redirect to admin dashboard
    } else if (form.email === "user@user.com" && form.password === "user123") {
      setIsAdmin(false); // Set to false for normal user
      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to normal user dashboard
    } else {
      setErr("Invalid credentials");
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={onSubmit} className="auth-form">
          <label className="ff">
            <span>Email</span>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={onChange}
            />
          </label>

          <label className="ff">
            <span>Password</span>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={onChange}
            />
          </label>

          {err && <div className="auth-error">{err}</div>}

          <button className="btn" type="submit">Login</button>
        </form>

        <div className="auth-links">
          Don’t have an account? <Link to="/signup">Create one</Link>
        </div>
      </div>
    </div>
  );
}
