import React from "react";
import { connect } from "react-redux";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Modal, Button, Image, Form} from "react-bootstrap";

const SignUpModal = (props) => {
    return (
        <>
            <Modal 
            show={props.signUpModal}
            onHide={props.closeSignUpModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="auth-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="signin-modal form-section">
                        <Link to="#" className="sign-in-logo">
                            <Image
                                src={
                                    window.location.origin +
                                    "/assets/images/logo.png"
                                }
                                alt=""
                                className="modal-logo"
                            />
                        </Link>
                        <Button className="social-button" id="facebook-connect">
                            <span>Sign Up / Login with Facebook</span>
                        </Button>
                        <Button className="social-button" id="google-connect">
                            <span>Sign Up / Login with Google</span>
                        </Button>
                        <span className="or-line"><span>or</span></span>
                        <Form className="modal-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                placeholder="First Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                placeholder="Last Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                placeholder="E-mail"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Group>
                            <div className="modal-btn-sec">
                                <Button
                                type="submit"
                                className="btn btn-auth">
                                    Register
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToPros = (state) => ({
    cards: state.cards.cardDetails,
});

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(SignUpModal);
