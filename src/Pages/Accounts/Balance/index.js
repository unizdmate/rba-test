import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAccount } from "../../../Store/Slices/layoutSlice";
import Card from "../../../Components/Card";
import Table from "../../../Components/Table.js";

const Balance = () => {
  const selectedAccount = useSelector((state) => state.layout.selectedAccount);
  const dispatch = useDispatch();
  const handleSelectedAccount = (account) => {
    dispatch(setSelectedAccount(account));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
            useSelector((state) => state.layout.selectedAccount) ===
            "giroAccount"
          }
        />
      </div>
      {selectedAccount === "checkingAccount" && (
        <div style={{ display: "flex" }}>
          <Table data={data} columns={columns} />
          <Table data={data} columns={columns} />
        </div>
      )}
    </div>
  );
};

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
];
const data = [
  { name: "Joe", age: 30 },
  { name: "Jill", age: 25 },
  { name: "John", age: 40 },
  { name: "Jane", age: 35 },
];

export default Balance;
