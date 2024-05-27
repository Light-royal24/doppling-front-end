import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ onLogout }) {
    let navigate = useNavigate();

  const handleLogout = async () => {
    const response = await fetch('http://127.0.0.1:8000/logout/', {
      method: 'POST',
    });

    if (response.ok) {
      onLogout();
      navigate('/login')
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
