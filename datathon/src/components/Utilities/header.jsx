import React from 'react';
import web_logo from "../../assets/web_logo2.png";
import { Home } from 'lucide-react';
import { BsCardImage, BsCardList } from 'react-icons/bs';
import { CgPerformance } from 'react-icons/cg';
import { MdQuiz } from 'react-icons/md';

const Header = () => {
  return (
    <>
      <header className="relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/70 to-blue-500/70 p-4"></div>
        <div className="opacity-90">
          {/* Content Section */}
          <div className="relative z-10 flex justify-between items-center p-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={web_logo} alt="Logo" className="w-64 h-18" />
            </div>

            {/* Navigation Section */}
            <nav className="flex space-x-8">
              <a href="#" className="flex items-center text-white hover:text-blue-200">
                <Home className="mr-2" /> Home
              </a>
              <a href="#" className="flex items-center text-white hover:text-blue-200">
                <BsCardList className="mr-2" /> Flashcard Generator
              </a>
              <a href="#" className="flex items-center text-white hover:text-blue-200">
                <MdQuiz className="mr-2" /> Quiz Generator
              </a>
              <a href="#" className="flex items-center text-white hover:text-blue-200">
               
                 <CgPerformance/> Performance
                 </a>
            </nav>

            {/* Action Buttons */}
            <div className="flex space-x-4">
             {/* Login Button */}
<button
  type="button"
  className="bg-white text-teal-400 border-2 border-teal-400 w-28 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:border-white rounded-md px-4 py-2 transition duration-300 ease-in-out"
>
  Login
</button>

{/* Register Button */}
<button
  type="button"
  className="bg-gradient-to-r  from-teal-400 to-blue-500 text-white border-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-teal-400 border-2 hover:border-teal-400 w-28 "
>
  Register
</button>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
