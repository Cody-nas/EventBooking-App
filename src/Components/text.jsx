import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h1 className="text-2xl font-bold mb-4">Log in to your Account</h1>
        <p className="text-gray-500 mb-6">Welcome back! Select method to log in:</p>

        <div className="flex space-x-4 mb-4">
          <button className="flex items-center gap-2 px-6 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex items-center gap-2 px-6 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
            <FaFacebook className="text-blue-500" /> Facebook
          </button>
        </div>

        <p className="text-gray-400 mb-4">or continue with email</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-md mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-md mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between w-full text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700">Log in</button>

        <p className="text-gray-500 mt-4 text-sm">
          Don't have an account? <a href="#" className="text-blue-500">Create an account</a>
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10 text-center">
        <div className="bg-white p-6 rounded-full mb-6">
          <img src="/icons.png" alt="Integration Icons" className="w-32" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Connect with every application.</h2>
        <p className="text-gray-200">Everything you need in an easily customizable dashboard.</p>
      </div>
    </div>
  );
}
