
import React, { useState } from 'react';

const Simulator = ({ onRerun, inductionPlan }) => {
  const [toggles, setToggles] = useState({
    ignoreFitness: false,
    ignoreCleaning: false,
    ignoreBranding: false,
    reduceCleaningSlots: false,
  });
  const [showSchedule, setShowSchedule] = useState(false);

  const handleToggle = (toggle) => {
    setToggles((prev) => ({ ...prev, [toggle]: !prev[toggle] }));
  };

  const handleRerun = () => {
    onRerun();
    setShowSchedule(true);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">What-if Simulator</h2>
      <div className="grid grid-cols-2 gap-4">
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
        <div className="flex items-center">
          <input
            type="checkbox"
            id="reduceCleaningSlots"
            checked={toggles.reduceCleaningSlots}
            onChange={() => handleToggle('reduceCleaningSlots')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="reduceCleaningSlots" className="ml-2 block text-sm text-gray-900">
            Reduce Cleaning Slots
          </label>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleRerun}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Rerun Optimization
        </button>
      </div>
      {showSchedule && inductionPlan && inductionPlan.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Simulated Induction Plan</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Rank</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Train</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Reason</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {inductionPlan.map((item, index) => (
                  <tr key={item.id}>
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">{item.reason}</td>
                    <td
                      className={`py-3 px-4 font-bold ${
                        item.status === 'Included' ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulator;
