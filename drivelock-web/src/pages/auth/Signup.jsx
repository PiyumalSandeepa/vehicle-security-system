import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ownerName: "",
    email: "",
    password: "",
    numberPlate: "",
  });
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (!form.ownerName || !form.email || !form.password) {
      setErr("Please fill the required fields.");
      return;
    }
    // TODO: call backend here
    // simulate success:
    navigate("/login");
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={onSubmit} className="auth-form grid2">
          <label className="ff">
            <span>Owner Name</span>
            <input
              className="input"
              name="ownerName"
              placeholder="John Doe"
              value={form.ownerName}
              onChange={onChange}
            />
          </label>

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

          <label className="ff">
            <span>Vehicle Number Plate (optional)</span>
            <input
              className="input"
              name="numberPlate"
              placeholder="ABC-1234"
              value={form.numberPlate}
              onChange={onChange}
            />
          </label>

          {err && <div className="auth-error" style={{gridColumn:'1 / -1'}}>{err}</div>}

          <div style={{gridColumn: "1 / -1"}}>
            <button className="btn" type="submit">Sign up</button>
          </div>
        </form>

        <div className="auth-links">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
