import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { setSelectedAccount } from "../../../Store/Slices/layoutSlice";
import {
  getCheckingAccountIncomingPayments,
  getCheckingAccountOutgoingPayments,
} from "../../../Store/Slices/checkingAccountSlice";
import { formatNumber } from "../../../Utils";
import Card from "../../../Components/Card";
import Table from "../../../Components/Table.js";
import FAB from "../../../Components/FAB";
import PaymentModal from "../../../Components/PaymentModal";
import DropDownSelect from "../../../Components/DropDownSelect";

const Balance = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDropDownOption, setSelectedDropDownOption] =
    useState("allAccounts");

  const selectedAccount = useSelector((state) => state.layout.selectedAccount);

  const incomingPayments = useSelector(
    (state) => state.checkingAccount.incomingPayments
  );

  const outgoingPayments = useSelector(
    (state) => state.checkingAccount.outgoingPayments
  );

  const accountBalance = useSelector(
    (state) => state.checkingAccount.accountBalance
  );

  const remainingBalance = useSelector(
    (state) => state.checkingAccount.remainingBalance
  );

  const dispatch = useDispatch();

  const handleSelectedAccount = (account) => {
    dispatch(setSelectedAccount(account));
  };

  const dispatchGetIncomingPayments = async () => {
    try {
      await dispatch(getCheckingAccountIncomingPayments()).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const dispatchGetOutgoingPayments = async () => {
    try {
      await dispatch(getCheckingAccountOutgoingPayments()).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatchGetIncomingPayments();
    dispatchGetOutgoingPayments();
  }, [accountBalance, remainingBalance]);

  const incomingPaymentsColumns = [
    {
      Header: "Uplate po tekućem računu",
      columns: [
        {
          Header: "Datum",
          accessor: "date",
          Cell: (props) => {
            return props.value
              ? format(new Date(props.value), "dd.MM.yyyy.")
              : null;
          },
        },
        {
          Header: "Platitelj",
          accessor: "payer",
        },
        {
          Header: "Iznos",
          accessor: "amount",
          Cell: (props) => {
            return formatNumber(Number(props.value));
          },
        },
      ],
    },
  ];

  const outgoingPaymentsColumns = [
    {
      Header: "Isplate po tekućem računu",
      columns: [
        {
          Header: "Datum",
          accessor: "date",
          Cell: (props) => {
            return props.value
              ? format(new Date(props.value), "dd.MM.yyyy.")
              : null;
          },
        },
        {
          Header: "Primatelj",
          accessor: "payee",
        },
        {
          Header: "Iznos",
          accessor: "amount",
          Cell: (props) => {
            return `- ${formatNumber(Number(props.value))}`;
          },
        },
      ],
    },
  ];

  const openPaymentModal = () => {
    setShowModal(true);
  };

  const closePaymentModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DropDownSelect
        onChange={(e) => setSelectedDropDownOption(e)}
        label="Vrsta računa"
      />
      {selectedDropDownOption === "allAccounts" && (
        <>
          <div style={{ display: "flex" }}>
            <Card
              accountType="Moj tekući račun"
              accountNumber="HR2398383000987623"
              accountBalance={accountBalance}
              remainingBalance={remainingBalance}
              onClick={() => handleSelectedAccount("checkingAccount")}
              active={selectedAccount === "checkingAccount"}
            />
            <Card
              accountType="Kunski žiro račun"
              accountNumber="HR7818383000982229"
              accountBalance={4237.54}
              remainingBalance={3972.85}
              onClick={() => handleSelectedAccount("giroAccount")}
              active={selectedAccount === "giroAccount"}
            />
          </div>
          {selectedAccount === "checkingAccount" && (
            <div style={{ display: "flex" }}>
              <Table
                data={incomingPayments}
                columns={incomingPaymentsColumns}
              />
              <Table
                data={outgoingPayments}
                columns={outgoingPaymentsColumns}
              />
            </div>
          )}
          <FAB onClick={() => openPaymentModal()} />
          <PaymentModal show={showModal} onHide={() => closePaymentModal()} />
        </>
      )}
    </div>
  );
};

export default Balance;
