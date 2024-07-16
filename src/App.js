// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoGrid from './components/CryptoGrid';
import CryptoDetails from './components/CryptoDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header p-4 bg-blue-500 text-white mt-4">
          <h1 className="text-2xl">Crypto Currency List</h1>
        </header>
        <Routes>
          <Route path="/" element={<CryptoGrid />} />
          <Route path="/crypto/:id" element={<CryptoDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
