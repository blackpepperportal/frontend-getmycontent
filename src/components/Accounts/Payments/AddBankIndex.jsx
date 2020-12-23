import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./AddBankIndex.css";
import { addBankAccountStart } from "../../../store/actions/BankAccountAction";

const AddBankIndex = (props) => {
  const [inputData, setInputData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch(addBankAccountStart(inputData));
  };

  return (
    <div className="card-list-sec">
      <Container>
        <h4 className="head-title">Add Bank</h4>
        <Row>
          <Col sm={12} md={12}>
            <div className="add-bank-box">
              <Form onSubmit={handleSubmit}>
                <Col md={6}>
                  <Form.Group controlId="formHorizontalNickname">
                    <Form.Label>Nick Name: (*)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nick Name"
                      value={inputData.nickname}
                      name="nickname"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          nickname: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formHorizontalAccountName">
                    <Form.Label>Account Name: (*)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Account Name"
                      value={inputData.account_holder_name}
                      name="account_holder_name"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          account_holder_name: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formHorizontalAccountNumber">
                    <Form.Label>Account Number: (*)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Account Number"
                      value={inputData.account_number}
                      name="account_number"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          account_number: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formHorizontalBanlName">
                    <Form.Label>
                      Bank Name:{" "}
                      <span className="text-capitalize">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bank Name"
                      value={inputData.bank_name}
                      name="bank_name"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          bank_name: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formHorizontalIFSCCode">
                    <Form.Label>
                      IFSC Code:{" "}
                      <span className="text-capitalize">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="IFSC Code"
                      value={inputData.ifsc_code}
                      name="ifsc_code"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          ifsc_code: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formHorizontalSWIFTCode">
                    <Form.Label>
                      SWIFT Code:{" "}
                      <span className="text-capitalize">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="SWIFT Code"
                      value={inputData.swift_code}
                      name="swift_code"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          swift_code: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formHorizontalRouteNumber">
                    <Form.Label>
                      Route Number:
                      <span className="text-capitalize">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Route Number"
                      value={inputData.route_number}
                      name="route_number"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          route_number: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formHorizontalIBANNumber">
                    <Form.Label>
                      IBAN Number:{" "}
                      <span className="text-capitalize">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="IBAN Number"
                      value={inputData.iban_number}
                      name="iban_number"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          iban_number: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <div className="edit-save">
                  <Button
                    className="save-btn"
                    type="submit"
                    disabled={props.bankAccount.buttonDisable}
                  >
                    {props.bankAccount.loadingButtonContent !== null
                      ? props.bankAccount.loadingButtonContent
                      : "Submit"}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  bankAccount: state.bankAccount.addBankAccountInput,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(AddBankIndex);
