import { React, useState } from "react";
import Create from "../DashboardComponents/CreateEvent";
import Sidebar from "../DashboardComponents/Sidebar";
import Navbar from "../DashboardComponents/Navbar";

const CreateEvent = () => {
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
          <Create />
        </main>
      </div>
    </div>
  );
};

export default CreateEvent;
