
import React from 'react';

const StartPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Kochi Metro Planner</h1>
      <p className="text-lg mb-4">
        This project aims to solve the daily challenge of selecting the right trains for service, standby, and maintenance for the Kochi Metro.
      </p>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">The Problem</h2>
        <p className="mb-4">
          Currently, the process of deciding which trains to deploy is a manual 2-hour task that involves reconciling data from various sources like spreadsheets, logbooks, and even WhatsApp messages. This is not only inefficient but also prone to errors that can lead to delays, increased costs, and failure to meet commitments.
        </p>
        <h2 className="text-2xl font-bold mb-2">The Solution</h2>
        <p>
          The Kochi Metro Planner is a software platform that streamlines this process by:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Integrating all train-related data into a single dashboard.</li>
          <li>Using optimization algorithms to recommend the best trains for service.</li>
          <li>Providing a clear, ranked induction list with justifications for each choice.</li>
          <li>Allowing for what-if simulations to test different scenarios.</li>
          <li>Using a GenAI-powered assistant to explain decisions in natural language.</li>
        </ul>
      </div>
    </div>
  );
};

export default StartPage;
