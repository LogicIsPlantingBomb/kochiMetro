
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AiAssistant from './AiAssistant/AiAssistant';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-8 py-4 bg-gray-900">
          <h1 className="text-2xl font-bold">Kochi Metro</h1>
        </div>
        <nav className="flex-1 px-4 py-4">
          <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded">Home</Link>
          <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded">Dashboard</Link>
          <Link to="/train-map" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded">Train Map</Link>
          <Link to="/induction-plan" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded">Induction Plan</Link>
          <Link to="/simulator" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded">Simulator</Link>
        </nav>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Outlet />
        </main>
      </div>
      <div className="w-96 bg-gray-100 border-l border-gray-300">
        <AiAssistant />
      </div>
    </div>
  );
};

export default Layout;
