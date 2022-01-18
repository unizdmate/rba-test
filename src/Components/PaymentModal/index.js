import React, { useState } from "react";
import { Modal, Tab, Tabs, Button } from "react-bootstrap";

const PaymentModal = ({ show, onHide }) => {
  const [key, setKey] = useState("incomingPayment");
  return (
    <Modal
      size="lg"
      centered
      className="user-modal"
      show={show}
      onHide={() => {
        return;
      }}
    >
      <Tabs
        id="modal-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="incomingPayment" title="Nova uplata"></Tab>
        <Tab eventKey="outgoingPayment" title="Nova isplata"></Tab>
      </Tabs>
      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={() => onHide()}>
          Odustani
        </Button>
        <Button type="submit">Potvrdi</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
