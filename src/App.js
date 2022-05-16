import './App.css'
import React from "react";
import LandingPage from './components/pages/LandingPage';
import EnterprisePage from './components/pages/EnterprisePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path="/mastic" element={ <EnterprisePage /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
