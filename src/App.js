import Header from './components/Header'
import Hero from './components/Hero';
import RegularSection from './components/RegularSection';

import './App.css'
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        
      <Footer />
    </div>
  );
}

export default App;
