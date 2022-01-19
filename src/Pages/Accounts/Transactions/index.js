import React, { useState } from "react";
import FAB from "../../../Components/FAB";
import PaymentModal from "../../../Components/PaymentModal";

const Transactions = () => {
  const [showModal, setShowModal] = useState(false);

  const openPaymentModal = () => {
    setShowModal(true);
  };

  const closePaymentModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <FAB onClick={() => openPaymentModal()} />
      <PaymentModal show={showModal} onHide={() => closePaymentModal()} />
    </div>
  );
};

export default Transactions;
