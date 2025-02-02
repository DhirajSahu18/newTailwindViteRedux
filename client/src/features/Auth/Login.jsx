import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1a202c] text-white font-sans">
      <form onSubmit={handleLoginSubmit} className="bg-[#2d3748] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-6">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3182ce]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-6 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3182ce]"
        />
        <button
          type="submit"
          className="w-full bg-[#3182ce] p-3 rounded-md text-white hover:bg-[#2b6cb0] focus:outline-none"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#3182ce] hover:text-[#2b6cb0]">
            Signup here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
