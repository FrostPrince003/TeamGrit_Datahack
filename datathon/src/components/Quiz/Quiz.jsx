import React, { useState } from "react";
import Showable from "../Landing/Showable";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register chart.js components
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement);

// Sample quiz data
const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    correct_answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct_answer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Ernest Hemingway",
    ],
    correct_answer: "William Shakespeare",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
  });

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === currentQuestion.correct_answer;
    setFeedback(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setResults((prevResults) => ({
        ...prevResults,
        correct: prevResults.correct + 1,
      }));
    } else {
      setResults((prevResults) => ({
        ...prevResults,
        incorrect: prevResults.incorrect + 1,
      }));
    }

    setShowCorrectAnswer(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    setShowCorrectAnswer(false);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true);
    }
  };

  // Chart Data
  const pieChartData = {
    labels: ["Correct Answers", "Incorrect Answers"],
    datasets: [
      {
        label: "Quiz Performance",
        data: [results.correct, results.incorrect],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#e57373"],
      },
    ],
  };

  const barChartData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Answers",
        backgroundColor: ["#4caf50", "#f44336"],
        data: [results.correct, results.incorrect],
      },
    ],
  };

  return (
    <Showable>
      <div className="quiz-container flex flex-col items-center bg-gradient-to-r justify-center text-center min-h-screen from-teal-400 to-blue-500 text-white p-4">
        {!finished ? (
          <>
            <h1 className="text-4xl font-extrabold mb-6">Quiz</h1>
            <div className="question-section bg-white text-gray-800 rounded-lg shadow-md p-6 max-w-xl w-full">
              <h2 className="text-2xl font-semibold mb-4">{currentQuestion.question}</h2>

              <ul className="options-list grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, index) => (
                  <li
                    key={index}
                    className={`option-item cursor-pointer p-3 border rounded-lg transition-all duration-300 transform hover:scale-105 
                    ${
                      showCorrectAnswer && option === currentQuestion.correct_answer
                        ? "bg-teal-400 text-white"
                        : ""
                    } 
                    ${
                      showCorrectAnswer &&
                      option !== currentQuestion.correct_answer &&
                      selectedAnswer === option
                        ? "bg-red-500 text-white"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    style={{
                      pointerEvents: showCorrectAnswer ? "none" : "auto",
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>

              {showCorrectAnswer && (
                <div className="feedback-section mt-6">
                  <p
                    className={`feedback text-xl font-semibold ${
                      feedback === "correct" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {feedback === "correct" ? "Correct!" : "Incorrect!"}
                  </p>
                  <button
                    className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    onClick={handleNextQuestion}
                  >
                    {currentQuestionIndex < quizData.length - 1
                      ? "Next Question"
                      : "Finish Quiz"}
                  </button>
                </div>
              )}
            </div>

            <div className="score-section mt-6 text-lg">
              <p className="bg-gray-800 p-2 rounded-lg">Score: {score}/{quizData.length}</p>
            </div>
          </>
        ) : (
          <div className="result-section">
            <h1 className="text-4xl font-bold text-white mb-6">Quiz Results</h1>
            <div className="charts-container grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pie Chart */}
              <div className="pie-chart bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Correct vs Incorrect</h2>
                <Pie data={pieChartData} />
              </div>

              {/* Bar Chart */}
              <div className="bar-chart bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Answers Distribution</h2>
                <Bar data={barChartData} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl text-white font-semibold">Total Score: {score}/{quizData.length}</h3>
            </div>
          </div>
        )}
      </div>
    </Showable>
  );
};

export default Quiz;
