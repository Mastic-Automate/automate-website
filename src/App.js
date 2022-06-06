import './App.css'
import React from "react";
import LandingPage from './components/pages/LandingPage';
import EnterprisePage from './components/pages/EnterprisePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CheckoutPage_payment from './components/pages/CheckoutPage_payment';
import CheckoutPage_address from './components/pages/CheckoutPage_address';



export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path="/mastic" element={ <EnterprisePage /> } />
            <Route path="/checkoutPage_payment" element={ <CheckoutPage_payment /> } />
            <Route path="/checkoutPage_address" element={ <CheckoutPage_address /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
