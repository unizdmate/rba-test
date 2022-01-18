import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./layoutStyles.css";

const Layout = ({ children }) => {
  const selectedNavItem = useSelector((state) => state.layout.selectedNavItem);
  if (selectedNavItem === "payments") {
    return (
      <div className="layout-container obsolete">
        <Sidebar />
        <h3>OBSOLETE</h3>
      </div>
    );
  }
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />

      {children}
    </div>
  );
};

export default Layout;
