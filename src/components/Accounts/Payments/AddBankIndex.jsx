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
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Nick Name :
                  </Form.Label>
                  <Col sm={10}>
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
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Account Name :
                  </Form.Label>
                  <Col sm={10}>
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
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Account Number :
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
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
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Bank Name :
                  </Form.Label>
                  <Col sm={10}>
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
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    IFSC Code :
                  </Form.Label>
                  <Col sm={10}>
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
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    SWIFT Code :
                  </Form.Label>
                  <Col sm={10}>
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
                  </Col>
                </Form.Group>
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
