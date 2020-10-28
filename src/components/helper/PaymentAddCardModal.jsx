import React from "react";
import { Link } from "react-router-dom";
import { Form, Modal, InputGroup, FormControl, Col, Row, Button } from "react-bootstrap";
import Background from "../helper/g-3.jpg";

const PaymentAddCardModal = (props) => {
    return (
        <>
            <Modal
                className="modal-dialog-center payment-add-card-modal"
                size="md"
                centered
                show={props.paymentAddCard}
                onHide={props.closePaymentAddCardModal}
            >
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={12} md={7}>
                                <InputGroup className="">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i class="far fa-credit-card"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Card Number"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={12} md={5}>
                                <InputGroup className="">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i class="far fa-calendar-alt"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="MM / YY / CVC"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            type="button"
                            className="btn btn-danger width-btn"
                            data-dismiss="modal"
                        >
                            CANCEL
                        </Button>
                        <Button
                            type="button"
                            className="btn btn-success width-btn"
                            data-dismiss="modal"
                        >
                            ADD 
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default PaymentAddCardModal;
