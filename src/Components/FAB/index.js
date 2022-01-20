import React from "react";
import "./fabStyles.css";

const FAB = ({ onClick }) => {
  return (
    <div className="fab-main" onClick={() => onClick()}>
      <span>+</span>
    </div>
  );
};

export default FAB;
