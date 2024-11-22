import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="container mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;