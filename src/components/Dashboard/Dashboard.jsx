import React, { useState, useEffect } from 'react';
import Charts from '../Charts';

import Simulator from '../Simulator/Simulator';
import { trains } from '../../data/trains';
import { maintenance } from '../../data/maintenance';
import { passengers } from '../../data/passengers';
import { tickets } from '../../data/tickets';



import { TrainMap } from '../TrainMap';

const Dashboard = () => {
  const [inductionPlan, setInductionPlan] = useState([]);

  const generateInitialInductionPlan = () => {
    const sortedTrains = [...trains].sort((a, b) => a.mileage - b.mileage);
    const generatedPlan = sortedTrains.map(train => {
      let reason = '';
      let status = '';
      let conflict = null;

      if (train.fitness === 'Approved' && train.cleaning === 'Clean') {
        status = 'Included';
        reason = 'Low mileage, clean, and available.';
      } else if (train.fitness === 'Pending') {
        status = 'Excluded';
        reason = 'Pending fitness approval.';
      } else if (train.cleaning === 'Dirty') {
        status = 'Excluded';
        reason = 'Requires cleaning.';
      } else {
        status = 'Excluded';
        reason = 'Fitness rejected.';
      }

      if (train.name === 'Train #3') {
        conflict = 'Telecom clearance missing.';
      }

      return { ...train, reason, status, conflict };
    });
    setInductionPlan(generatedPlan);
  };

  useEffect(() => {
    generateInitialInductionPlan();
  }, []); // Generate initial plan on component mount

  const handleRerunOptimization = () => {
    setInductionPlan(prevPlan => [...prevPlan].sort(() => Math.random() - 0.5));
  };
  

  const totalPassengers = passengers.reduce((acc, p) => acc + p.in, 0);
  const totalRevenue = tickets.reduce((acc, t) => acc + t.revenue, 0);

  const getTrainStatus = (train) => {
    if (train.fitness === 'Rejected') {
      return 'Maintenance';
    } else if (train.fitness === 'Approved' && train.cleaning === 'Clean' && train.branding === 'Active') {
      return 'Fit';
    } else {
      return 'Standby';
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Kochi Metro Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Trains</h3>
          <p className="text-3xl font-bold text-gray-900">{trains.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Fit for Service</h3>
          <p className="text-3xl font-bold text-green-500">{trains.filter(t => getTrainStatus(t) === 'Fit').length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Standby</h3>
          <p className="text-3xl font-bold text-yellow-500">{trains.filter(t => getTrainStatus(t) === 'Standby').length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Under Maintenance</h3>
          <p className="text-3xl font-bold text-red-500">{trains.filter(t => getTrainStatus(t) === 'Maintenance').length}</p>
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
        <h2 className="text-2xl font-bold mb-4">Trainset Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Train</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Fitness</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Mileage</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Cleaning</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Branding</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Last Maintenance</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Next Maintenance</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {trains.map((train) => (
                <tr key={train.id}>
                  <td className="py-3 px-4">{train.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 font-semibold leading-tight ${
                      getTrainStatus(train) === 'Fit' ? 'text-green-700 bg-green-100' :
                      getTrainStatus(train) === 'Standby' ? 'text-yellow-700 bg-yellow-100' :
                      'text-red-700 bg-red-100'
                    } rounded-full`}>
                      {getTrainStatus(train)}
                    </span>
                  </td>
                  <td className="py-3 px-4">{train.fitness}</td>
                  <td className="py-3 px-4">{train.mileage}</td>
                  <td className="py-3 px-4">{train.cleaning}</td>
                  <td className="py-3 px-4">{train.branding}</td>
                  <td className="py-3 px-4">{train.lastMaintenance}</td>
                  <td className="py-3 px-4">{train.nextMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <Simulator onRerun={handleRerunOptimization} inductionPlan={inductionPlan} />
      <Charts />
    </div>
  );
};

export default Dashboard;