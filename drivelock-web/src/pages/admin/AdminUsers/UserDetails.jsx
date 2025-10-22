import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Example hardcoded user data (you will fetch this from an API in a real app)
const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "Active", address: "123 Main St", phone: "555-1234" },
  { id: 2, name: "Admin A", email: "admin@example.com", role: "admin", status: "Invited", address: "456 Admin Rd", phone: "555-5678" }
];

export default function UserDetails() {
  const { userId } = useParams(); // Retrieve the user ID from the route params
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details based on userId (using hardcoded data here)
    const selectedUser = userData.find((user) => user.id === parseInt(userId));
    setUser(selectedUser);
  }, [userId]);

  // If user data is not available, show loading or error message
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
}
