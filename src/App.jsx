import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Purchase from "./Pages/Purchase";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard/index"

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
