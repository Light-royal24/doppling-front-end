import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
    <Routes>
        <Route index element={`${isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}`} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;

{/* <Route path="/home">
  {isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
</Route> */}