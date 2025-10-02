import React, { useState, useEffect } from 'react';

const InductionPlan = () => {
  const [inductionPlan, setInductionPlan] = useState([]);
  const [showConflict, setShowConflict] = useState(false);

  useEffect(() => {
    const generateInductionPlan = () => {
      const newTrains = [];
      for (let i = 1; i <= 25; i++) {
        newTrains.push({
          id: `train-${i}`,
          name: `Train KM${String(i).padStart(2, '0')}`,
          reason: 'New Induction',
          status: 'Included',
          conflict: i % 5 === 0 ? `Conflict detected for Train KM${String(i).padStart(2, '0')}` : null, // Add some dummy conflicts
        });
      }
      setInductionPlan(newTrains);
    };

    generateInductionPlan();
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">Train Induction Plan</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Data Input</h3>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="job-card-upload" className="block text-sm font-medium text-gray-700">Upload Maximo Job-Card Export</label>
            <input type="file" id="job-card-upload" className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          </div>
          <div className="flex-1">
            <label htmlFor="manual-override" className="block text-sm font-medium text-gray-700">Manual Overrides</label>
            <textarea id="manual-override" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter manual overrides here..."></textarea>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Rank</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Train</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Reason</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Conflict</th>
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
                <td className="py-3 px-4">
                  {item.conflict && (
                    <span
                      className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full cursor-pointer"
                      onClick={() => setShowConflict(item.conflict)}
                    >
                      Alert
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showConflict && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4">Conflict Alert</h3>
            <p>{showConflict}</p>
            <button
              onClick={() => setShowConflict(false)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InductionPlan;