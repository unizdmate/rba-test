import React from "react";
import { formatNumber } from "../../Utils";
import "./CardStyles.css";

const Card = ({
  accountType,
  accountNumber,
  accountBalance,
  remainingBalance,
  onClick,
  active,
}) => {
  return (
    <div
      className={`card-container ${active && "card-container-active"}`}
      onClick={() => onClick()}
    >
      <div className="card-item">
        <h4>{accountType}</h4>
        <p>{accountNumber}</p>
      </div>
      <div className="card-item">
        <h3>{formatNumber(accountBalance)} HRK</h3>
        <p>Raspoloživo: {formatNumber(remainingBalance)} HRK</p>
      </div>
    </div>
  );
};

export default Card;
