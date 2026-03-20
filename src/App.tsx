/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Breeds } from './pages/Breeds';
import { DataCentre } from './pages/DataCentre';
import { Process } from './pages/Process';
import { Comparison } from './pages/Comparison';
import { Nutrition } from './pages/Nutrition';
import { Technology } from './pages/Technology';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/data-centre" element={<DataCentre />} />
        </Routes>
      </Layout>
    </Router>
  );
}
