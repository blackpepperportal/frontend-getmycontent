import React, { Component } from "react";
import { connect } from "react-redux";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import "./AddBankIndex.css"

class AddBankIndex extends Component {

    render() {
        return (
            <div className="card-list-sec">
                <Container>
                    <h4 className="head-title">Add Bank</h4>
                    <Row>
                        <Col sm={12} md={12}>
                            <div className="add-bank-box">
                                <Form>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                        Nick Name :
                                        </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="email" placeholder="Nick Name" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                        Account Name :
                                        </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="text" placeholder="Account Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                        Account Number :
                                        </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="text" placeholder="Account Number" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                        Bank Name :
                                        </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="text" placeholder="Bank Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                        IFSC Code :
                                        </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="text" placeholder="IFSC Code" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                        SWIFT Code :
                                        </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="text" placeholder="SWIFT Code" />
                                        </Col>
                                    </Form.Group>
                                    <div className="edit-save">
                                        <Button className="save-btn"> Submit </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AddBankIndex;