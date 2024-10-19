import React from 'react';
import Header from '../Utilities/header';
import rightimage from "../../assets/right-image.png";
import { Coins, Crown, Gift } from 'lucide-react';
import { GiKing } from 'react-icons/gi';

// Right Component (Logo/Image)
const Right = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-transparent">
      <img src={rightimage} alt="Right Section Image" className="w-96 h-96" /> {/* Adjusted valid size */}
    </div>
  );
};

// Left Component (Text and Button)
const Left = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-transparent">
      <div className="flex flex-col text-white max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
         <div> Daily Quiz,</div> <div>Daily Bonus</div> <div>Play Today!</div>
        </h1>
        <p className="mb-8">
          QuizKwik is the daily Trivia and quiz playing platform. It brings some exciting surprises every day.
        </p>
        <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg mb-8">
          Play Today
        </button>
      </div>
    </div>
  );
};

// Main Content Component (Down Section)
const Down = () => {
  return (
    <div className=' bg-gradient-to-r from-[#6dded5] to-[#73b9ee] rounded-xl w-3/4 h-auto m-4'>

    <div className="p-8 m-8  text-white">
      {/* Cards for options */}
      <div className="flex space-x-4">
        
        {/* Card 1: Daily Trivia */}
        <div className="bg-white text-yellow-400 border border-gray-300 p-2 rounded-xl  shadow-lg flex flex-col items-center w-1/3">
          <Gift alt="Daily Trivia" className="w-12 h-12 mb-4" />
          <span className="text-lg font-semibold mb-4">Daily Trivia</span>
          <button className="text-black bg-white border-2 border-black font-semibold">
            Start Now &rarr;
          </button>
        </div>

        {/* Card 2: Daily Play & Win */}
        <div className="bg-yellow-400 text-white p-4 rounded-lg flex flex-col  shadow-lg items-center w-1/3">
          <Coins alt="Daily Play" className="w-12 h-12 mb-4" />
          <span className="text-lg font-semibold mb-4">Daily Play & Win</span>
          <button className="text-black bg-white border-2 border-black  font-semibold">
            Start Now &rarr;
          </button>
        </div>

        {/* Card 3: Play Like King */}
        <div className="bg-white text-yellow-400 border border-gray-300 shadow-lg p-4 rounded-lg flex flex-col items-center w-1/3">
          <Crown alt="Play Like King" className="w-12 h-12 mb-4" />
          <span className="text-lg font-semibold mb-4">Play Like King</span>
          <button className="text-black bg-white border-2 border-black  font-semibold">
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
      
      <div className=" w-max-full  bg-gradient-to-r from-teal-400 to-blue-500 rounded-b-2xl ">
        <div className='flex flex-row h-112'>

        <Left />
        <Right />
        </div>
        <div className='flex flex-row justify-center'>

      <Down />
      </div>
      </div>
      
    </>
  );
};

export default HeroSection;
