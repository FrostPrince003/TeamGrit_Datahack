"use client"; // This is required for client-side code

import localFont from "next/font/local"; 
import "./globals.css"; // Assuming you have a global CSS file
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

// Load custom fonts using next/font/local
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",

});



// Root layout component
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* Apply the custom font classes to the body */}
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <SignedOut>
            {/* Show SignInButton when user is signed out */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            {/* Show UserButton when user is signed in */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
              <UserButton />
            </div>
            {/* Render the children passed to the layout */}
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
