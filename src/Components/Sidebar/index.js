import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNavItem } from "../../Store/Slices/layoutSlice";
import "./sidebarStyles.css";

const Sidebar = () => {
  const selectedNavItem = useSelector((state) => state.layout.selectedNavItem);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div>
        <p className="sidebar-logo">RBA</p>
      </div>
      <div onClick={() => dispatch(setSelectedNavItem("accounts"))}>
        <p
          className={
            selectedNavItem === "accounts"
              ? "sidebar-item-active"
              : "sidebar-item"
          }
        >
          Računi
        </p>
      </div>
      <div onClick={() => dispatch(setSelectedNavItem("payments"))}>
        <p
          className={
            selectedNavItem === "payments"
              ? "sidebar-item-active"
              : "sidebar-item"
          }
        >
          Plaćanja
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
