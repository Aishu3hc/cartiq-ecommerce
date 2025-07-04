// src/App.js
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './components/HomePage';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import ExitPage from './pages/ExitPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <HashRouter>
      <Routes>
        {/* Default: Go to login if not logged in */}
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
         
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
