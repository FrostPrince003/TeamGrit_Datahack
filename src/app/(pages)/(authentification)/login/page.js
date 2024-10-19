"use client"; // Mark the component as a client component
import { SignIn, useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { isLoaded, session } = useSession(); // Use Clerk's session hook to check for authentication
  const router = useRouter();

  useEffect(() => {
    // If the session exists (i.e., the user is signed in), redirect to the home page
    if (isLoaded && session) {
      router.push("/home"); // Redirect to the home page
    }
  }, [isLoaded, session, router]);

  // If not signed in, show the sign-in form
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignIn />
    </div>
  );
}
