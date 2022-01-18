import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import Card from "../Card";
import "./headerStyles.css";
import { setSelectedAccount } from "../../Store/Slices/layoutSlice";

const Header = () => {
  const [key, setKey] = useState("balance");
  const dispatch = useDispatch();
  const handleSelectedAccount = (account) => {
    dispatch(setSelectedAccount(account));
  };
  return (
    <div className="header-main">
      <Tabs
        id="header-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="balance" title="Stanja">
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
        </Tab>
        <Tab eventKey="transactions" title="Prometi"></Tab>
      </Tabs>
    </div>
  );
};

export default Header;
