import React, { useState } from 'react';
import { FlashCardArray } from 'react-flashcards';
import Showable from '../Landing/Showable';

// Flashcard data
const flashcards = [
  { id: 1, front: 'What is the powerhouse of the cell?', back: 'Mitochondria' },
  { id: 2, front: 'What is the process by which plants make their own food?', back: 'Photosynthesis' },
  { id: 3, front: 'What method in JavaScript is used to stop further propagation of an event during its execution?', back: 'event.stopPropagation()' },
  { id: 4, front: 'What does the acronym DOM stand for in web development?', back: 'Document Object Model' },
  { id: 5, front: 'Who developed the theory of evolution by natural selection?', back: 'Charles Darwin' },
  { id: 6, front: 'What is the term for a word that is similar in meaning to another word?', back: 'Synonym' },
  { id: 7, front: 'Which part of speech describes a noun or pronoun?', back: 'Adjective' },
];

const Flatcard = () => {
  const [inputType, setInputType] = useState('text');
  const [formData, setFormData] = useState({
    numCards: 0,
    inputType: 'text',
    outputType: 'text',
    content: '',
  });
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle changes for input type
  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
    handleChange(e);
  };

  // Handle form submission
  const generateClicked = (e) => {
    e.preventDefault();
    setIsFormDisabled(true); // Disable form after submission
    console.log('Form data:', formData);
    setFormSubmitted(true); // Display submission success message

    // Reset form after 2 seconds (for demo purposes)
    setTimeout(() => {
      setIsFormDisabled(false);
      setFormSubmitted(false);
      setFormData({ numCards: 0, inputType: 'text', outputType: 'text', content: '' });
    }, 2000);
  };

  return (
    <Showable>
      <div className="flex flex-col md:flex-row justify-between p-8 space-y-6 md:space-y-0">
        {/* Form Section */}
        <form className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Generate Flashcards</h2>

          {/* Number of Cards */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Enter Number of Cards</label>
            <input
              type="number"
              name="numCards"
              className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.numCards}
              onChange={handleChange}
              disabled={isFormDisabled}
            />
          </div>

          {/* Input Type Selection */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Select Input Type</label>
            <select
              name="inputType"
              className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.inputType}
              onChange={handleInputTypeChange}
              disabled={isFormDisabled}
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="document">Document</option>
            </select>
          </div>

          {/* Conditional Input for Content */}
          <div className="mb-4">
            {inputType === 'text' ? (
              <>
                <label className="block mb-2 font-medium text-gray-700">Enter Text Content</label>
                <textarea
                  name="content"
                  cols={30}
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.content}
                  onChange={handleChange}
                  disabled={isFormDisabled}
                ></textarea>
              </>
            ) : (
              <>
                <label className="block mb-2 font-medium text-gray-700">Enter URL</label>
                <input
                  type="text"
                  name="content"
                  className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500 mb-2"
                  placeholder="Enter URL"
                  value={formData.content}
                  onChange={handleChange}
                  disabled={isFormDisabled}
                />
                <p className="text-center text-gray-500">OR</p>
                <input
                  type="file"
                  name="content"
                  className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onChange={(e) => setFormData({ ...formData, content: e.target.files[0] })}
                  disabled={isFormDisabled}
                />
              </>
            )}
          </div>

          {/* Output Type Selection */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Select Output Type</label>
            <select
              name="outputType"
              className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.outputType}
              onChange={handleChange}
              disabled={isFormDisabled}
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateClicked}
            className={`w-full px-4 py-2 text-white rounded-md ${isFormDisabled ? 'bg-gray-400' : 'bg-teal-500 hover:bg-teal-600'}`}
            disabled={isFormDisabled}
          >
            {isFormDisabled ? 'Generating...' : 'Generate'}
          </button>

          {/* Submission Feedback */}
          {formSubmitted && (
            <p className="mt-4 text-center text-green-600">Flashcards generated successfully!</p>
          )}
        </form>

        {/* Flashcards Display Section */}
        <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">Flashcards Quiz</h1>
            <FlashCardArray cards={flashcards} width="600px" className="space-y-4" />
          </div>
        </div>
      </div>
    </Showable>
  );
};

export default Flatcard;
