"use client"; // Mark the component as a client component
import { useRouter } from "next/navigation"; // Import for navigation

export default function HomeSection() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Section!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
