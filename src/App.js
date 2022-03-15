import './App.css'
import { Image } from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
