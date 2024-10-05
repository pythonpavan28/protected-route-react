// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, restricted = false }) => {
  const token = localStorage.getItem('token');
 

  // Redirect authenticated users away from the login page
  if (restricted && token) {
    return <Navigate to="/home"  />;
  }

  // Redirect unauthenticated users away from protected pages
  if (!restricted && !token) {
    return <Navigate to="/login"   />;
  }

  return element;
};

export default ProtectedRoute;
