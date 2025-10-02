import React, { useState } from 'react';

const AiAssistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    const lowerCaseQuestion = question.toLowerCase();
    if (lowerCaseQuestion.includes('train #5')) {
      setResponse('Train #5 was not selected because its fitness was rejected.');
    } else if (lowerCaseQuestion.includes('why was train #3 excluded')) {
      setResponse('Train #3 was excluded because it is pending fitness approval and requires cleaning.');
    } else if (lowerCaseQuestion.includes('what is the status of train #1')) {
      setResponse('Train #1 is currently on time and is at Aluva station.');
    } else if (lowerCaseQuestion.includes('how many trains are fit for service')) {
      setResponse('There are currently 4 trains that are fit for service.');
    } else {
      setResponse("Sorry, I don't have the answer to that question right now.");
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