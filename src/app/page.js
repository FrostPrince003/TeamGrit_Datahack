"use client"; // Mark this component as a client component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' in App Router
import HomeSection from "./(pages)/home/page"; // Adjust path for your Home section
import LoginPage from "./(pages)/(authentification)/login/page"; // Correct login page import

function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to indicate loading state
  const router = useRouter();

  useEffect(() => {
    // Simulate authentication check (replace with real logic)
    const token = localStorage.getItem("token"); // Assuming token is saved in localStorage

    if (token) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      // If not authenticated, redirect to login page
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // If checking authentication, show a loading indicator
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If authenticated, render the HomeSection component
  if (isAuthenticated) {
    return <HomeSection />;
  }

  // Fallback: In case redirect fails, render login page directly
  return <LoginPage />;
}

export default Page;
