import './App.css';
import React from 'react';
import Home from './pages/home';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/home" />}
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
