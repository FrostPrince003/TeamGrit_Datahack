import React from 'react';
import logo from '../../assets/logo.png'; // Ensure the logo path is correct

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" height={50} width={50} className="mr-3" />
          <h1 className="text-xl font-semibold text-gray-700">My App</h1>
        </div>

        {/* Navigation Section */}
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">FlashCard Generator</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Quiz Generator</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Performance</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Register
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
