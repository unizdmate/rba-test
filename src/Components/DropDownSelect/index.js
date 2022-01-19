import React from "react";
import "./dropDownSelectStyles.css";

const DropDownSelect = ({ onChange }) => {
  return (
    <div className="dropdown-main">
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="allAccounts">Svi računi</option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default DropDownSelect;
