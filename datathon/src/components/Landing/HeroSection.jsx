import React from 'react';
import Header from '../Utilities/header';
import rightimage from "../../assets/right-image.png";
import { Coins, Crown, Gift } from 'lucide-react';

// Right Component (Logo/Image)
const Right = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-transparent">
      <img src={rightimage} alt="Right Section Image" className="w-64 h-64 md:w-96 md:h-96" /> {/* Adjust size based on screen */}
    </div>
  );
};

// Left Component (Text and Button)
const Left = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-transparent">
      <div className="flex flex-col text-[#1E1C39] max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          <div>Daily Quiz,</div> 
          <div>Daily Bonus</div> 
          <div>Play Today!</div>
        </h1>
        <p className="mb-8 text-center md:text-left">
          QuizKwik is the daily Trivia and quiz playing platform. It brings some exciting surprises every day.
        </p>
        <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg mb-8 mx-auto md:mx-0">
          Play Today
        </button>
      </div>
    </div>
  );
};

// Main Content Component (Down Section)
const Down = () => {
  return (
    <div className="bg-gradient-to-r from-[#6dded5] to-[#73b9ee] rounded-xl w-full md:w-3/4 h-auto my-4">
      <div className="p-4 md:p-8 text-white">
        {/* Cards for options */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          
          {/* Card 1: Daily Trivia */}
          <div className="bg-white text-yellow-400 border border-gray-300 p-4 rounded-xl shadow-lg flex flex-col items-center w-full md:w-1/3">
            <Gift alt="Daily Trivia" className="w-12 h-12 mb-4" />
            <span className="text-lg font-semibold mb-4">Daily Trivia</span>
            <button className="text-black bg-white border-2 border-black font-semibold py-1 px-4">
              Start Now &rarr;
            </button>
          </div>

          {/* Card 2: Daily Play & Win */}
          <div className="bg-yellow-400 text-white p-4 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/3">
            <Coins alt="Daily Play" className="w-12 h-12 mb-4" />
            <span className="text-lg font-semibold mb-4">Daily Play & Win</span>
            <button className="text-black bg-white border-2 border-black font-semibold py-1 px-4">
              Start Now &rarr;
            </button>
          </div>

          {/* Card 3: Play Like King */}
          <div className="bg-white text-yellow-400 border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/3">
            <Crown alt="Play Like King" className="w-12 h-12 mb-4" />
            <span className="text-lg font-semibold mb-4">Play Like King</span>
            <button className="text-black bg-white border-2 border-black font-semibold py-1 px-4">
              Start Now &rarr;
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// HeroSection Component
const HeroSection = () => {
  return (
    <>
      {/* Include Header if needed */}
      {/* <Header /> */}
      
      <div className="w-full bg-white rounded-b-2xl">
        <div className="flex flex-col md:flex-row h-auto md:h-112">
          <Left />
          <Right />
        </div>

        <div className="flex justify-center">
          <Down />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
