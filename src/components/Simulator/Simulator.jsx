
import React, { useState } from 'react';

const Simulator = () => {
  const [toggles, setToggles] = useState({
    ignoreFitness: false,
    ignoreCleaning: false,
    ignoreBranding: false,
  });

  const handleToggle = (toggle) => {
    setToggles((prev) => ({ ...prev, [toggle]: !prev[toggle] }));
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">What-if Simulator</h2>
      <div className="flex justify-around">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ignoreFitness"
            checked={toggles.ignoreFitness}
            onChange={() => handleToggle('ignoreFitness')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="ignoreFitness" className="ml-2 block text-sm text-gray-900">
            Ignore Fitness
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ignoreCleaning"
            checked={toggles.ignoreCleaning}
            onChange={() => handleToggle('ignoreCleaning')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="ignoreCleaning" className="ml-2 block text-sm text-gray-900">
            Ignore Cleaning
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ignoreBranding"
            checked={toggles.ignoreBranding}
            onChange={() => handleToggle('ignoreBranding')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="ignoreBranding" className="ml-2 block text-sm text-gray-900">
            Ignore Branding
          </label>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
