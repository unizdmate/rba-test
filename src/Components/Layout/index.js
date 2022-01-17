import React from "react";
import "./layoutStyles.css";

const Layout = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
