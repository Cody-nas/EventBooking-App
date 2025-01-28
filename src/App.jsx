import Navbar from "./Components/Navbar";
import Choose from "./Components/Choose";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BuyTicket from "./Pages/BuyTicket";
import About from "./Pages/About";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BuyTicket" element={<BuyTicket />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
