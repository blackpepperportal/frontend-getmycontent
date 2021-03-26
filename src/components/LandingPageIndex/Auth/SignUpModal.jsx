import React, { useState } from "react";
import { connect } from "react-redux";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Modal, Button, Image, Form} from "react-bootstrap";

import configuration from "react-global-configuration";
import SocialButton from "../../helper/SocialButton";
import {
    userRegisterStart,
    usernameValidationStart,
} from "../../../store/actions/UserAction";

const SignUpModal = (props) => {

    const [signupInputData, setSignupInputData] = useState({});

    const handleSignup = (event) => {
        event.preventDefault();
        props.dispatch(userRegisterStart(signupInputData));
    };

    const handleUsernameValidation = (event, username) => {
        setSignupInputData({
          ...signupInputData,
          username: username,
        })
        props.dispatch(usernameValidationStart({username:username}));
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
                            <span>Sign Up / Login with Facebook</span>
                        </Button>
                        <Button className="social-button" id="google-connect">
                            <span>Sign Up / Login with Google</span>
                        </Button> */}
                        {configuration.get("configData.GOOGLE_CLIENT_ID") || configuration.get("configData.FB_CLIENT_ID") ? (
                            <span className="or-line"><span>or</span></span>
                        ) : (
                            ''
                        )}
                        <Form className="modal-form" onSubmit={handleSignup}
                          id="form"
                          method="post"
                          name="form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    controlId="name"
                                    placeholder="Name"
                                    required
                                    value={signupInputData.name}
                                    name="name"
                                    autocomplete="off"
                                    onChange={(event) =>
                                        setSignupInputData({
                                        ...signupInputData,
                                        name: event.currentTarget.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    controlId="lastname"
                                    placeholder="User Name"
                                    required
                                    autocomplete="off"
                                    value={signupInputData.user_name}
                                    name="username"
                                    onChange={(event) =>
                                        handleUsernameValidation(event, event.currentTarget.value)
                                    }
                                    isValid={props.validation.isValid}
                                    isInvalid={props.validation.isInValid}
                                />
                                {props.validation.isInValid ? 
                                <Form.Control.Feedback type="invalid">Username already taken. Please try another</Form.Control.Feedback>
                                : ''}
                                {props.validation.isValid ? 
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                : ''}
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                controlId="registeremail"
                                placeholder="E-mail"
                                required
                                autocomplete="off"
                                value={signupInputData.email}
                                name="email"
                                onChange={(event) =>
                                    setSignupInputData({
                                    ...signupInputData,
                                    email: event.currentTarget.value,
                                    })
                                }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                type="password"
                                controlId="registerpassword"
                                placeholder="Password"
                                required
                                autocomplete="off"
                                value={signupInputData.password}
                                name="password"
                                onChange={(event) =>
                                    setSignupInputData({
                                    ...signupInputData,
                                    password: event.currentTarget.value,
                                    })
                                }
                                />
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicName"
                                className="round"
                            >
                                {/* <input type="checkbox" id="checkbox" /> */}
                                {/* <label for="checkbox"></label> */}
                                <p className="terms">
                                By signing up you agree to our{" "}
                                <Link to={`/page/terms`} target="_blank">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link to={`/page/privacy`} target="_blank">
                                    Privacy Policy
                                </Link>
                                .
                                </p>
                            </Form.Group>
                            <div className="modal-btn-sec">
                                <Button
                                id="register"
                                type="submit"
                                onClick={handleSignup}
                                className="btn btn-auth"
                                disabled={props.signup.buttonDisable}
                                >
                                {props.signup.loadingButtonContent !== null
                                    ? props.signup.loadingButtonContent
                                    : "SIGN UP"}
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
    signup: state.users.registerInputData,
    validation: state.users.validationInputData,
});

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(SignUpModal);
