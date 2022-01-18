import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAccount } from "../../../Store/Slices/layoutSlice";
import Card from "../../../Components/Card";

const Balance = () => {
  const dispatch = useDispatch();
  const handleSelectedAccount = (account) => {
    dispatch(setSelectedAccount(account));
  };
  return (
    <div style={{ display: "flex" }}>
      <Card
        accountType="Moj tekući račun"
        accountNumber="HR2398383000987623"
        accountBalance={5235.25}
        remainingBalance={4978.75}
        onClick={() => handleSelectedAccount("checkingAccount")}
        active={
          useSelector((state) => state.layout.selectedAccount) ===
          "checkingAccount"
        }
      />
      <Card
        accountType="Kunski žiro račun"
        accountNumber="HR7818383000982229"
        accountBalance={4237.54}
        remainingBalance={3972.85}
        onClick={() => handleSelectedAccount("giroAccount")}
        active={
          useSelector((state) => state.layout.selectedAccount) === "giroAccount"
        }
      />
    </div>
  );
};

export default Balance;
