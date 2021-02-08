import React from "react";
import { connect } from "react-redux";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Modal, Button, Image, Form} from "react-bootstrap";

const SignInModal = (props) => {
    return (
        <>
            <Modal 
            show={props.signInModal}
            onHide={props.closeSignInModal}
            aria-labelledby="contained-modal-title-vcenter"
            className="auth-modal"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
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
                            <span>Sign In / Login with Facebook</span>
                        </Button>
                        <Button className="social-button" id="google-connect">
                            <span>Sign In / Login with Google</span>
                        </Button>
                        <span className="or-line"><span>or</span></span>
                        <Form className="modal-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                controlId="loginemail"
                                placeholder="E-mail"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                type="password"
                                controlId="loginpassword"
                                placeholder="Password"
                                />
                            </Form.Group>
                            <div className="modal-btn-sec">
                                <Button
                                type="submit"
                                className="btn btn-auth">
                                    Login
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

export default connect(mapStateToPros, mapDispatchToProps)(SignInModal);
