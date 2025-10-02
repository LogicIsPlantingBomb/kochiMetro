import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Kochi Metro Planner</h1>
          <p className="text-xl text-gray-600">
            A revolutionary tool to optimize daily train induction, maintenance, and service operations.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-4">
            The daily selection of trains for service, standby, and maintenance at Kochi Metro is a complex, manual process. It takes supervisors over two hours to reconcile data from disparate sources like spreadsheets, logbooks, and even WhatsApp. This inefficiency leads to errors, delays, increased costs, and a failure to meet service commitments.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Solution</h2>
          <p className="text-lg text-gray-700 mb-6">
            The Kochi Metro Planner is a comprehensive software platform that streamlines and automates this critical process. Here’s how:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Centralized Dashboard</h3>
              <p className="text-gray-600">Integrates all train-related data into a single, intuitive interface for a complete operational overview.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">AI-Powered Optimization</h3>
              <p className="text-gray-600">Utilizes advanced algorithms to recommend the optimal trains for service, maximizing efficiency and reliability.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">Transparent Recommendations</h3>
              <p className="text-gray-600">Provides a clear, ranked induction list with detailed justifications for each selection, ensuring full transparency.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">What-If Simulations</h3>
              <p className="text-gray-600">Allows supervisors to test various scenarios and immediately understand the impact of their decisions.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">GenAI Assistant</h3>
              <p className="text-gray-600">Features a natural language assistant to explain complex decisions and provide instant insights.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;