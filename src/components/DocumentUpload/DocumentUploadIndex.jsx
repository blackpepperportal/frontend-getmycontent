import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import "./DocumentUploadIndex.css";

const DocumentUploadIndex = (props) => {

    return (
        <>
            <div className="document-upload-sec">
                <Container>
                    <h4 class="head-title">Document Upload</h4>
                    <div className="document-card">
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="sub-heading">
                                    <h4>ID Proof</h4>
                                    <p>This could be your Passport or National ID</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} xl={6} className="resp-mrg-btn-xs">
                                <div className="document-upload-box">
                                    <Image
                                        src="/assets/images/icons/upload-id.svg"
                                        className="doc-upload-img"
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={6} xl={6}>
                                <div className="document-upload-box-1">
                                    <Form.Group className="upload-btn-wrapper">
                                        <Image
                                            src="/assets/images/document-upload.svg"
                                            className="doc-upload-img-1"
                                        />
                                        <Form.File
                                            id="exampleFormControlFile1"
                                            label=""
                                            accept="image/*"
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                                <Button
                                    className="receive-btn-blue"
                                >
                                    Submit
                            </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="space-mg"></div>
                    <div className="document-card">
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="sub-heading">
                                    <h4>Selfie with your ID Proof</h4>
                                    <p>Take a selfie with the ID proof Document you used just now</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} xl={6} className="resp-mrg-btn-xs">
                                <div className="document-upload-box">
                                    <Image
                                        src="/assets/images/icons/upload-face-id.svg"
                                        className="doc-upload-img"
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={6} xl={6}>
                                <div className="document-upload-box-1">
                                    <Form.Group className="upload-btn-wrapper">
                                        <Image
                                            src="/assets/images/document-upload.svg"
                                            className="doc-upload-img-1"
                                        />
                                        <Form.File
                                            id="exampleFormControlFile1"
                                            label=""
                                            accept="image/*"
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                                <Button
                                    className="receive-btn-blue"
                                >
                                    Submit
                            </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="space-mg"></div>
                </Container>
            </div>
        </>
    );
};

export default DocumentUploadIndex;
