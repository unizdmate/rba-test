import React from "react";
import "./dropDownSelectStyles.css";

const DropDownSelect = ({ onChange, label }) => {
  return (
    <div className="dropdown-main">
      <p className="dropdown-label">{label}</p>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="allAccounts">Svi računi</option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default DropDownSelect;
