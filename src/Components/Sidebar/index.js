import React from "react";
import "./sidebarStyles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar-logo">RBA</p>
      <p className="sidebar-item">Računi</p>
      <p className="sidebar-item">Plaćanja</p>
    </div>
  );
};

export default Sidebar;
