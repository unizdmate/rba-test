import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./headerStyles.css";
import Balance from "../../Pages/Accounts/Balance";
import Transactions from "../../Pages/Accounts/Transactions";

const Header = () => {
  const [key, setKey] = useState("balance");

  return (
    <div className="header-main">
      <Tabs
        id="header-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="balance" title="Stanja">
          <Balance />
        </Tab>
        <Tab eventKey="transactions" title="Prometi">
          <Transactions />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Header;
