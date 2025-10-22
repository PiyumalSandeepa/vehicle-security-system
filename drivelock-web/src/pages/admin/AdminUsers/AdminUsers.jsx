import React from "react";
import { Link } from "react-router-dom";

// Example hardcoded user data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "Active" },
  { id: 2, name: "Admin A", email: "admin@example.com", role: "admin", status: "Invited" },
];

export default function AdminUsers() {
  return (
    <div className="admin-users">
      <h2>Users</h2>
      <input type="text" placeholder="Search users..." className="search-input" />
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/admin/users/${user.id}`} className="user-link">{user.name}</Link> {/* Link to UserDetails */}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
