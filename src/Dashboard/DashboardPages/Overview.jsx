// Description: This is the Home page of the dashboard. It contains the sidebar and navbar components, and the main content area where the overview component is rendered.

import React from "react";
import { useState } from "react";
import Sidebar from "../DashboardComponents/Sidebar";
import Navbar from "../DashboardComponents/Navbar";
import Home from "../DashboardComponents/Overview";

const Overview = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="flex min-h-full fixed w-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <div className="flex-1 flex flex-col ">
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />
        <main className="p-6 max-h-screen overflow-auto">
          <Home />
        </main>
      </div>
    </div>
  );
};

export default Overview;
// This component is the main entry point for the dashboard overview page. It imports and uses the Sidebar and Navbar components, and renders the Home component as the main content area. The state variables manage the sidebar's collapsed state and mobile sidebar visibility.
