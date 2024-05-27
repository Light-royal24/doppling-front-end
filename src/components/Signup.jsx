import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/signup/", {
      method: "POST",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username,
        email,
        password1,
        password2,
      }),
    });

    if (response.ok) {
      let navigate = useNavigate();
      navigate('/login');
    } else {
      const data = await response.json();
      alert(JSON.stringify(data.errors));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
