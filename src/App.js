// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from './protectedRoute';
import Login from './components/login';
import Home from './components/home';
import About from './components/about';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<ProtectedRoute element={<Login />} restricted={true} />}
        />
        <Route
          path="/home"
          element={<ProtectedRoute element={<Home />} />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute element={<About />} />}
        />
        {/* Optional catch-all route */}
        <Route path="*" element={<Navigate to="/login"  />} />
      </Routes>
    </Router>
  );
};

export default App;
