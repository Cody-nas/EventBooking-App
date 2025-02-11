import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BG from "../assets/signBG.mp4";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form (Content on top) */}
      <div className="relative z-10 w-[80%] max-w-md p-6 backdrop-blur-2xl bg-opacity-90 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded  border-gray-300"
              />
              <span className='text-white'>Remember me</span>
            </label>
            <a href="#" className="text-white hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-white hover:underline">Sign up instead</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
