import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import Chat from './pages/Chat';
import Landing from './pages/Landing';
import Swup from 'swup';


function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const swup = new Swup()

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Landing/>} />
        <Route path='/home' element={ <Home/>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;

{/* <Route path="/home">
  {isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
</Route> */}