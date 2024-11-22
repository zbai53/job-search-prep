import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="text-center py-3">Navigation</h2>
      <nav>
        <Link to="/">Desktop</Link>
        <Link to="/Laptop">Laptop</Link>
        <Link to="/Monitor">Monitor</Link>
        <Link to="/Accessories">Accessories</Link>
      </nav>
    </div>
  );
};

export default Sidebar;