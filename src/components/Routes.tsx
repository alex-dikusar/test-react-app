import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Protected from '../pages/Protected';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/protected" element={<Protected />} />
    </Routes>
  );
}

export default AppRoutes;
