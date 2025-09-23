
import React, { useState } from 'react';

const AiAssistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    if (question.toLowerCase().includes('train #5')) {
      setResponse('Train #5 was not selected because its fitness was rejected.');
    } else {
      setResponse("I can only answer questions about Train #5 right now.");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>
      <div className="flex flex-col">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Ask a question, e.g., Why was Train #5 not selected?"
        ></textarea>
        <button
          onClick={handleAsk}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-4 self-center"
        >
          Ask
        </button>
        {response && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-800">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiAssistant;
