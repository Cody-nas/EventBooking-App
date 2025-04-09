import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Purchase from "./Pages/Purchase";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Events from "./Pages/Events";
import FindEvents from "./Pages/FindEvents";
import DashboardHome from "./Dashboard/DashboardPages/Overview";
import DashboardEvents from "./Dashboard/DashboardPages/Events";
import Messages from "./Dashboard/DashboardPages/Messages";
import CreateEvent from "./Dashboard/DashboardPages/CreateEvent";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/FindEvents" element={<FindEvents />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboardevents" element={<DashboardEvents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </>
  );
}

export default App;
