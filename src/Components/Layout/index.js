import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./layoutStyles.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
