import React, { useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";

const PaymentModal = ({ show }) => {
  const [key, setKey] = useState("incomingPayment");
  return (
    <Modal size="lg" centered className="user-modal" show={show}>
      <Modal.Header closeButton />
      <Tabs
        id="modal-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="incomingPayment" title="Nova uplata"></Tab>
        <Tab eventKey="outgoingPayment" title="Nova isplata"></Tab>
      </Tabs>
    </Modal>
  );
};

export default PaymentModal;
