import React from "react";
import Navbar from './Navbar';
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/my-portfolio/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
