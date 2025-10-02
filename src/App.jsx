
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StartPage from './components/StartPage';
import Dashboard from './components/Dashboard/Dashboard';

import { TrainMap } from './components/TrainMap';
import InductionPlan from './components/InductionPlan/InductionPlan';
import Simulator from './components/Simulator/Simulator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="train-map" element={<TrainMap />} />
          <Route path="induction-plan" element={<InductionPlan />} />
          <Route path="simulator" element={<Simulator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
