"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-extrabold text-gray-800">
          <Link href="/">QuizKwik</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-lg font-medium">
          <li>
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Trivia
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Quiz
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Leaderboard
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
            Registration
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center space-y-4 py-4 text-lg">
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Trivia
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Quiz
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-green-600 font-medium hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
                Registration
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
