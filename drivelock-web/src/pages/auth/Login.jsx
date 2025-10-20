import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (!form.email || !form.password) {
      setErr("Please enter email and password.");
      return;
    }
    // TODO: call backend here
    // simulate success:
    navigate("/dashboard");
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
