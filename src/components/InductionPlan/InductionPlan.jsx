
import React from 'react';

const InductionPlan = () => {
  const inductionPlan = [
    {
      train: 'Train #4',
      reason: 'Low mileage, clean, and available.',
      status: 'Included',
    },
    {
      train: 'Train #2',
      reason: 'Low mileage, clean, and available.',
      status: 'Included',
    },
    {
      train: 'Train #1',
      reason: 'Available, but higher mileage.',
      status: 'Included',
    },
    {
      train: 'Train #3',
      reason: 'Pending fitness approval and requires cleaning.',
      status: 'Excluded',
    },
    {
      train: 'Train #5',
      reason: 'Fitness rejected.',
      status: 'Excluded',
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">Induction Plan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Train</th>
              <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Reason</th>
              <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {inductionPlan.map((item, index) => (
              <tr key={index}>
                <td className="w-1/3 py-3 px-4">{item.train}</td>
                <td className="w-1/3 py-3 px-4">{item.reason}</td>
                <td
                  className={`w-1/3 py-3 px-4 font-bold ${
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
  );
};

export default InductionPlan;
