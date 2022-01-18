import React from "react";
import "./fabStyles.css";

const FAB = ({ onClick }) => {
  return (
    <div className="fab-main" onClick={() => onClick()}>
      +
    </div>
  );
};

export default FAB;
