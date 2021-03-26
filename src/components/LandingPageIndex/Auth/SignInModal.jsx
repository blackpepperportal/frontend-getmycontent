import React, { useState } from "react";
import { connect } from "react-redux";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Modal, Button, Image, Form} from "react-bootstrap";
import configuration from "react-global-configuration";
import SocialButton from "../../helper/SocialButton";
import {
    userLoginStart,
    userRegisterStart,
} from "../../../store/actions/UserAction";
import ForgotPasswordModal from "./ForgotPasswordModal";
const $ = window.$;

const SignInModal = (props) => {

    const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

    const [loginInputData, setLoginInputData] = useState({});

    const closeForgotPasswordModal = () => {
        setForgotPasswordModal(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        props.dispatch(userLoginStart(loginInputData));
    };

    const handleFacebookLogin = (user) => {
        console.log("handleFacebookLogin", user._profile);
        props.dispatch(
          userRegisterStart({
            name: user._profile.name,
            first_name: user._profile.firstName ? user._profile.firstName : "",
            last_name: user._profile.lastName ? user._profile.lastName : "",
            email: user._profile.email ? user._profile.email : "",
            social_unique_id: user._profile.id,
            picture: user._profile.profilePicURL,
            login_by: "facebook",
          })
        );
    };
    
    const handleGoogleLogin = (user) => {
        console.log("handleGoogleLogin", user._profile);
        props.dispatch(
          userRegisterStart({
            name: user._profile.name,
            email: user._profile.email,
            first_name: user._profile.firstName ? user._profile.firstName : "",
            last_name: user._profile.lastName ? user._profile.lastName : "",
            social_unique_id: user._profile.id,
            picture: user._profile.profilePicURL,
            login_by: "google",
          })
        );
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    const showForgotPassword = (event) => {
        event.preventDefault();
        setForgotPasswordModal(true);
        props.closeSignInModal();
    };

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
                                    "/assets/images/logo-get-my-content.png"
                                }
                                alt=""
                                className="modal-logo"
                            />
                        </Link>
                        {configuration.get("configData.FB_CLIENT_ID") ? (
                            <SocialButton
                            provider="facebook"
                            appId={configuration.get("configData.FB_CLIENT_ID")}
                            onLoginSuccess={handleFacebookLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            className="social-button"
                            id="facebook-connect"
                            >
                            <span>Sign In / Login with Facebook</span>
                            </SocialButton>
                        ) : (
                            ""
                        )}
                        
                        {configuration.get("configData.GOOGLE_CLIENT_ID") ? (
                            <SocialButton
                            provider="google"
                            key={"google"}
                            appId={configuration.get("configData.GOOGLE_CLIENT_ID")}
                            onLoginSuccess={handleGoogleLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            className="social-button"
                            id="google-connect"
                            >
                            <span>Sign Up / Login with Google</span>
                            </SocialButton>
                        ) : (
                            ""
                        )}

                        {/* <Button className="social-button" id="facebook-connect">
                            <span>Sign In / Login with Facebook</span>
                        </Button> */}
                        {/* <Button className="social-button" id="google-connect">
                            <span>Sign In / Login with Google</span>
                        </Button> */}

                        {configuration.get("configData.GOOGLE_CLIENT_ID") || configuration.get("configData.FB_CLIENT_ID") ? (
                            <span className="or-line"><span>or</span></span>
                        ) : (
                            ''
                        )}
                        <Form className="modal-form" onSubmit={handleLogin} method="post">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                controlId="loginemail"
                                placeholder="E-mail"
                                required
                                value={loginInputData.email}
                                name="email"
                                autocomplete="off"
                                onChange={(event) =>
                                    setLoginInputData({
                                    ...loginInputData,
                                    email: event.currentTarget.value,
                                    })
                                }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                type="password"
                                controlId="loginpassword"
                                placeholder="Password"
                                required
                                autocomplete="off"
                                value={loginInputData.password}
                                name="password"
                                onChange={(event) =>
                                    setLoginInputData({
                                    ...loginInputData,
                                    password: event.currentTarget.value,
                                    })
                                }
                                />
                            </Form.Group>
                            <div className="forget-password">
                                <p id="one">
                                <Link
                                    className="forgot-link"
                                    onClick={showForgotPassword}
                                    // onClick={(event) => {
                                    //     event.preventDefault();
                                    //     setForgotPasswordModal(true);
                                    // }}
                                >
                                    {" "}
                                    Forgot password?{" "}
                                </Link>
                                </p>
                            </div>
                            <div className="modal-btn-sec">
                                <Button
                                id="login"
                                type="submit"
                                onClick={handleLogin}
                                className="btn btn-auth btn-lg"
                                disabled={props.login.buttonDisable}
                                >
                                {props.login.loadingButtonContent !== null
                                    ? props.login.loadingButtonContent
                                    : "Login"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <ForgotPasswordModal forgotPasswordModal={forgotPasswordModal} closeForgotPasswordModal={closeForgotPasswordModal} />
        </>
    );
};

const mapStateToPros = (state) => ({
    login: state.users.loginInputData,
});

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(SignInModal);
