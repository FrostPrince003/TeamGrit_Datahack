import React from 'react';
import web_logo from "../../assets/website_logo.png";
import { Home } from 'lucide-react';
import { BsCardImage, BsCardList } from 'react-icons/bs';
import { CgPerformance } from 'react-icons/cg';
import { MdQuiz } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="relative bg-white p-2">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-90"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center py-2 px-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={web_logo} alt="Logo" className="w-40 h-auto md:w-64" />
            </div>

            {/* Navigation Section (Desktop) */}
            <nav className="hidden md:flex space-x-8">
              <p 
                onClick={() => navigate("/")} 
                className="flex items-center text-[#1E1C39] hover:text-teal-400 cursor-pointer"
              >
                <Home className="mr-2" /> Home
              </p>
              <p 
                onClick={() => navigate("/flashcard")} 
                className="flex items-center text-[#1E1C39] hover:text-teal-400 cursor-pointer"
              >
                <BsCardList className="mr-2" /> Flashcard Generator
              </p>
              <p 
                onClick={() => navigate("/quiz-generator")} 
                className="flex items-center text-[#1E1C39] hover:text-teal-400 cursor-pointer"
              >
                <MdQuiz className="mr-2" /> Quiz Generator
              </p>
              <p 
                onClick={() => navigate("/performance")} 
                className="flex items-center text-[#1E1C39] hover:text-teal-400 cursor-pointer"
              >
                <CgPerformance className="mr-2" /> Performance
              </p>
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex space-x-4">
              {/* Login Button */}
              <button
                type="button"
                className="bg-white rounded-full text-teal-400 border-2 border-teal-400 w-24 md:w-28 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:border-white px-4 py-2 transition duration-300 ease-in-out"
              >
                Login
              </button>

              {/* Register Button */}
              <button
                type="button"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-teal-400 hover:border-teal-400 border-2 w-24 md:w-28"
              >
                Register
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex flex-col mt-4 px-4">
            <nav className="flex flex-col space-y-4">
              <p 
                onClick={() => navigate("/")} 
                className="text-[#1E1C39] hover:text-teal-400 cursor-pointer text-left"
              >
                <Home className="mr-2 inline" /> Home
              </p>
              <p 
                onClick={() => navigate("/flashcard")} 
                className="text-[#1E1C39] hover:text-teal-400 cursor-pointer text-left"
              >
                <BsCardList className="mr-2 inline" /> Flashcard Generator
              </p>
              <p 
                onClick={() => navigate("/quiz-generator")} 
                className="text-[#1E1C39] hover:text-teal-400 cursor-pointer text-left"
              >
                <MdQuiz className="mr-2 inline" /> Quiz Generator
              </p>
              <p 
                onClick={() => navigate("/performance")} 
                className="text-[#1E1C39] hover:text-teal-400 cursor-pointer text-left"
              >
                <CgPerformance className="mr-2 inline" /> Performance
              </p>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-4 mt-4">
              {/* Login Button */}
              <button
                type="button"
                className="bg-white rounded-full text-teal-400 border-2 border-teal-400 w-full hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:border-white px-4 py-2 transition duration-300 ease-in-out"
              >
                Login
              </button>

              {/* Register Button */}
              <button
                type="button"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white border-white rounded-full w-full px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-teal-400 hover:border-teal-400 border-2"
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
