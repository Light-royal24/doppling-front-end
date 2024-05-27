import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/login', {
      method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        username,
        password,
      }),
    });

    if (response.ok) {
      onLogin();
        let navigate = useNavigate();
        navigate('/home');
    } else {
      const data = await response.json();
      alert(JSON.stringify(data.error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Welcome Back :)</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm">UserName</label>
            <input
              type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required 
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={password} onChange={(e) => setPassword(e.target.value)} required 
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <div>
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Login Now</button>
          </div>
        </form>
        <p className="text-sm text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
    </form>
  );
}

export default Login;
