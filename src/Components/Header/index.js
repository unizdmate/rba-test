import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./headerStyles.css";

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
        <Tab eventKey="balance" title="Stanja"></Tab>
        <Tab eventKey="transactions" title="Prometi"></Tab>
      </Tabs>
    </div>
  );
};

export default Header;
