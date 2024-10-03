import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="font-inter">
      <div
        className={`h-[75px] ${
          isSidebarExpanded ? "md:pl-56" : "md:pl-20"
        } fixed inset-y-0 w-full z-50 transition-all duration-300`}
      >
        <Navbar />
      </div>
      <div
        className={`hidden md:flex h-full ${
          isSidebarExpanded ? "w-56" : "w-20"
        } flex-col fixed inset-y-0 z-50 bg-white transition-all duration-300`}
      >
        <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>
      <main
        className={`${
          isSidebarExpanded ? "md:pl-56" : "md:pl-20"
        } transition-all duration-300`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
