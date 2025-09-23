import React, { useState } from 'react';
import Charts from '../Charts';
import InductionPlan from '../InductionPlan/InductionPlan';
import Simulator from '../Simulator/Simulator';
import { trains } from '../../data/trains';
import { maintenance } from '../../data/maintenance';
import { passengers } from '../../data/passengers';
import { tickets } from '../../data/tickets';

import TrainMap from '../TrainMap';

const Dashboard = () => {
  const [showPlan, setShowPlan] = useState(false);

  const handleGeneratePlan = () => {
    setShowPlan(true);
  };

  const totalPassengers = passengers.reduce((acc, p) => acc + p.in, 0);
  const totalRevenue = tickets.reduce((acc, t) => acc + t.revenue, 0);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Kochi Metro Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Trains</h3>
          <p className="text-3xl font-bold text-gray-900">{trains.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">On Time</h3>
          <p className="text-3xl font-bold text-green-500">{trains.filter(t => t.status === 'On Time').length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Delayed</h3>
          <p className="text-3xl font-bold text-yellow-500">{trains.filter(t => t.status === 'Delayed').length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Cancelled</h3>
          <p className="text-3xl font-bold text-red-500">{trains.filter(t => t.status === 'Cancelled').length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Passengers</h3>
          <p className="text-3xl font-bold text-gray-900">{totalPassengers}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-3xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Maintenance Tasks</h3>
          <p className="text-3xl font-bold text-gray-900">{maintenance.length}</p>
        </div>
      </div>
      <TrainMap />
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Train Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Train</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Fitness</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Mileage</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Cleaning</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Branding</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Last Maintenance</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Next Maintenance</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Current Station</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Next Station</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">ETA</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Capacity</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Current Load</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {trains.map((train) => (
                <tr key={train.id}>
                  <td className="py-3 px-4">{train.name}</td>
                  <td className="py-3 px-4">{train.fitness}</td>
                  <td className="py-3 px-4">{train.mileage}</td>
                  <td className="py-3 px-4">{train.cleaning}</td>
                  <td className="py-3 px-4">{train.branding}</td>
                  <td className="py-3 px-4">{train.lastMaintenance}</td>
                  <td className="py-3 px-4">{train.nextMaintenance}</td>
                  <td className="py-3 px-4">{train.status}</td>
                  <td className="py-3 px-4">{train.currentStation}</td>
                  <td className="py-3 px-4">{train.nextStation}</td>
                  <td className="py-3 px-4">{train.eta}</td>
                  <td className="py-3 px-4">{train.capacity}</td>
                  <td className="py-3 px-4">{train.currentLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Maintenance Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Train</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Task</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Date</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {maintenance.map((task) => (
                <tr key={task.train + task.task}>
                  <td className="py-3 px-4">{task.train}</td>
                  <td className="py-3 px-4">{task.task}</td>
                  <td className="py-3 px-4">{task.date}</td>
                  <td className="py-3 px-4">{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Charts />
      <div className="flex justify-center my-8">
        <button
          onClick={handleGeneratePlan}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Generate Induction Plan
        </button>
      </div>
      {showPlan && (
        <>
          <InductionPlan />
          <Simulator />
        </>
      )}
    </div>
  );
};

export default Dashboard;
