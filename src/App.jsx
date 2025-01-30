import Navbar from "./Components/Navbar";
// import Sign from "./Sign";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Purchase from "./Pages/Purchase";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Sign /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Purchase" element={<Purchase />} />
        <Route path="/About" element={<About />} />
        <Route path="/Purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
