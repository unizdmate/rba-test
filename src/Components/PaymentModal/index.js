import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  handleIncomingPayment,
  handleOutgoingPayment,
} from "../../Store/Slices/checkingAccountSlice";
import * as Yup from "yup";
import { Modal, Tab, Tabs, Button, Container, Row, Col } from "react-bootstrap";
import "./paymentModalStyles.css";
import Form from "../Form";
import InputField from "../InputField";
import NumericInputField from "../NumericInputField";
import DateTimeInputField from "../DateTimeInputField";

const PaymentModal = ({ show, onHide }) => {
  const [key, setKey] = useState("incomingPayment");
  const dispatch = useDispatch();

  const DatepickerButton = ({ value, onClick }) => (
    <Button block variant="primary" onClick={onClick} className="text-nowrap">
      {value ? value : "Odaberite datum"}
    </Button>
  );

  const IncomingPaymentForm = () => {
    const initialValues = {
      payer: "",
      amount: 100,
      date: new Date(),
    };

    const getValidationSchema = () => {
      return Yup.object().shape({
        payer: Yup.string()
          .required("Ime platitelja je obavezno polje")
          .matches(
            /^[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{2,50})+$/,
            "Obvezni podaci su ime i prezime, a dozvoljena samo slova"
          ),
        amount: Yup.number()
          .required("Iznos je obavezno polje")
          .positive("Iznos mora biti pozitivan broj"),
        date: Yup.date().required("Datum je obavezno polje"),
      });
    };

    const handleSubmit = (values) => {
      dispatch(handleIncomingPayment(values));
      onHide();
    };

    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <InputField
                    name="payer"
                    label="Ime platitelja"
                    autoComplete="off"
                    mandatory
                  />
                </Row>
                <Row>
                  <NumericInputField
                    name="amount"
                    label="Iznos"
                    autoComplete="off"
                    mandatory
                  />
                </Row>
                <Row>
                  <DateTimeInputField
                    name="date"
                    dateFormat="dd.MM.yyyy."
                    mandatory
                    label="Datum uplate"
                    customInput={<DatepickerButton />}
                    minDate={new Date()}
                  />
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button type="reset" variant="secondary" onClick={() => onHide()}>
                Odustani
              </Button>
              <Button type="submit">Prihvati</Button>
            </Modal.Footer>
            <span>{JSON.stringify(values)}</span>
          </Form>
        )}
      </Formik>
    );
  };

  const OutgoingPaymentForm = () => {
    const initialValues = {
      payee: "",
      amount: 100,
      date: new Date(),
    };

    const getValidationSchema = () => {
      return Yup.object().shape({
        payee: Yup.string()
          .required("Ime platitelja je obavezno polje")
          .matches(
            /^[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{2,50})+$/,
            "Obvezni podaci su ime i prezime, a dozvoljena samo slova"
          ),
        amount: Yup.number()
          .required("Iznos je obavezno polje")
          .positive("Iznos mora biti pozitivan broj"),
        date: Yup.date().required("Datum je obavezno polje"),
      });
    };

    const handleSubmit = (values) => {
      dispatch(handleOutgoingPayment(values));
      onHide();
    };

    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <InputField
                    name="payee"
                    label="Ime primatelja"
                    autoComplete="off"
                    mandatory
                  />
                </Row>
                <Row>
                  <NumericInputField
                    name="amount"
                    label="Iznos"
                    autoComplete="off"
                    mandatory
                  />
                </Row>
                <Row>
                  <DateTimeInputField
                    name="date"
                    dateFormat="dd.MM.yyyy."
                    mandatory
                    label="Datum uplate"
                    customInput={<DatepickerButton />}
                    minDate={new Date()}
                  />
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button type="reset" variant="secondary" onClick={() => onHide()}>
                Odustani
              </Button>
              <Button type="submit">Prihvati</Button>
            </Modal.Footer>
            <span>{JSON.stringify(values)}</span>
          </Form>
        )}
      </Formik>
    );
  };

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
        <Tab eventKey="incomingPayment" title="Nova uplata">
          <IncomingPaymentForm />
        </Tab>
        <Tab eventKey="outgoingPayment" title="Nova isplata">
          <OutgoingPaymentForm />
        </Tab>
      </Tabs>
    </Modal>
  );
};

export default PaymentModal;
