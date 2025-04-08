// import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Purchase from "./Pages/Purchase";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Events from "./Pages/Events";
import FindEvents from "./Pages/FindEvents";

import DashboardHome from "./Dashboard/DashboardPages/Overview";

import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/FindEvents" element={<FindEvents />} />
        <Route path="/dashboard/home" element={<DashboardHome />} />
      </Routes>
    </>
  );
}

export default App;
