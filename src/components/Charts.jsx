import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { trains } from '../data/trains';
import { passengers } from '../data/passengers';
import { tickets } from '../data/tickets';

const COLORS = { Approved: '#0088FE', Pending: '#FFBB28', Rejected: '#FF8042' };
const TICKET_COLORS = { 'Single Trip': '#0088FE', 'Round Trip': '#00C49F', 'Monthly Pass': '#FFBB28', 'Weekly Pass': '#FF8042', 'Student Pass': '#AF19FF' };
const STATUS_COLORS = { Fit: '#0088FE', Standby: '#FFBB28', Maintenance: '#FF8042' };

const Charts = () => {
  const fitnessData = trains.reduce((acc, train) => {
    const status = train.fitness;
    const existing = acc.find((item) => item.name === status);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: status, value: 1 });
    }
    return acc;
  }, []);

  const getTrainStatus = (train) => {
    if (train.fitness === 'Rejected') {
      return 'Maintenance';
    } else if (train.fitness === 'Approved' && train.cleaning === 'Clean' && train.branding === 'Active') {
      return 'Fit';
    } else {
      return 'Standby';
    }
  };

  const statusData = trains.reduce((acc, train) => {
    const status = getTrainStatus(train);
    const existing = acc.find((item) => item.name === status);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: status, value: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Train Status</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={statusData}
            cx={200}
            cy={150}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={(entry) => entry.name}
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Train Fitness Status</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={fitnessData}
            cx={200}
            cy={150}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={(entry) => entry.name}
          >
            {fitnessData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Train Mileage</h3>
        <BarChart width={400} height={300} data={trains}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mileage" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Passenger Traffic</h3>
        <BarChart width={400} height={300} data={passengers}>
          <XAxis dataKey="station" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="in" stackId="a" fill="#8884d8" name="Passengers In" />
          <Bar dataKey="out" stackId="a" fill="#82ca9d" name="Passengers Out" />
        </BarChart>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Ticket Sales</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={tickets}
            cx={200}
            cy={150}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="revenue"
            nameKey="type"
            label={(entry) => entry.type}
          >
            {tickets.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={TICKET_COLORS[entry.type]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;