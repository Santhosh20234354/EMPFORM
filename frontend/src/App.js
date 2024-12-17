import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import AddEmployee from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddEmployee />} /> {/* Add Employee Form */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;