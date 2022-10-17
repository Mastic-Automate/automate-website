import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
