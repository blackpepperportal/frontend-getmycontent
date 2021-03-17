import React, { useState } from "react";
import { connect } from "react-redux";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Modal, Button, Image, Form} from "react-bootstrap";
import configuration from "react-global-configuration";
import SocialButton from "../../helper/SocialButton";
import {
    forgotPasswordStart,
} from "../../../store/actions/UserAction";

const ForgotPasswordModal = (props) => {

    const [loginInputData, setLoginInputData] = useState({});

    const [forgotPasswordInputData, setForgotPasswordInputData] = useState({});

    const handleForgotPassword = (event) => {
        event.preventDefault();
        props.dispatch(forgotPasswordStart(forgotPasswordInputData));
    };

    return (
        <>
            <Modal 
            show={props.forgotPasswordModal}
            onHide={props.closeForgotPasswordModal}
            aria-labelledby="contained-modal-title-vcenter"
            className="auth-modal"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Forgot Password?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="signin-modal form-section">
                        <Link to="#" className="sign-in-logo">
                            <Image
                                src={
                                    window.location.origin +
                                    "/assets/images/logo-get-my-content.png"
                                }
                                alt=""
                                className="modal-logo"
                            />
                        </Link>
                        
                        <Form className="modal-form" onSubmit={handleForgotPassword} method="post">
                            <Form.Group controlId="formBasicEmail" className="mb-4">
                                <Form.Control
                                type="text"
                                controlId="loginemail"
                                className="form-control"
                                placeholder="E-mail"
                                required
                                value={forgotPasswordInputData.email}
                                name="email"
                                onChange={(event) =>
                                    setForgotPasswordInputData({
                                    ...forgotPasswordInputData,
                                    email: event.currentTarget.value,
                                    })
                                }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Button
                                id="forgotpassword"
                                type="submit"
                                onClick={handleForgotPassword}
                                className="btn btn-auth btn-lg"
                                disabled={props.forgotPassword.buttonDisable}
                                >
                                {props.forgotPassword.loadingButtonContent !==
                                null
                                    ? props.forgotPassword.loadingButtonContent
                                    : "Forgot Password"}
                                </Button>
                            </Form.Group>
                            
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToPros = (state) => ({
    forgotPassword: state.users.forgotPasswordInputData,
});

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ForgotPasswordModal);
