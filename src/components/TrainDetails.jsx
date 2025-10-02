
import React from 'react';
import { trains } from '../data/trains';

const TrainDetails = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Train Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Train</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Current Station</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Next Station</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">ETA</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Load</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {trains.map((train) => (
              <tr key={train.id}>
                <td className="py-3 px-4">{train.name}</td>
                <td className="py-3 px-4">{train.status}</td>
                <td className="py-3 px-4">{train.currentStation}</td>
                <td className="py-3 px-4">{train.nextStation}</td>
                <td className="py-3 px-4">{train.eta}</td>
                <td className="py-3 px-4">{train.currentLoad} / {train.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainDetails;
