import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import configuration from "react-global-configuration";

import { connect } from "react-redux";
import {
  forgotPasswordStart,
  userLoginStart,
  userRegisterStart,
} from "../../store/actions/UserAction";

const LandingPageIndex = (props) => {
  const [show, setShow] = useState("login");

  const [loginInputData, setLoginInputData] = useState({});

  const [signupInputData, setSignupInputData] = useState({});

  const [forgotPasswordInputData, setForgotPasswordInputData] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();
    props.dispatch(userLoginStart(loginInputData));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    props.dispatch(userRegisterStart(signupInputData));
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    props.dispatch(forgotPasswordStart(forgotPasswordInputData));
  };

  return (
    <>
      <div className="login-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xl={6}
              md={12}
              sm={12}
              xs={12}
              className="hidden-xs iphone-slide-area resp-btm-lg"
            >
              <div className="dm-width">
                <div className="dm-device">
                  <div className="device">
                    <div className="screen">
                      <div className="slider">
                        <div className="slider__item slider__item--1"></div>
                        <div className="slider__item slider__item--2"></div>
                        <div className="slider__item slider__item--3"></div>
                        <div className="slider__item slider__item--4"></div>
                        <div className="slider__item slider__item--5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} xl={6} md={12} sm={12} xs={12}>
              <div className="sign-in form-section">
                <Link to="#" aria-current="page" className="sign-in-logo">
                  <Image
                    src={configuration.get("configData.site_logo")}
                    width="237"
                  />
                </Link>
                <p className="login-tagline">
                  Sign up to make money and interact with your fans!
                </p>
                <div className="forms-fields">
                  <Link to="#" className="social-button" id="twitter-connect">
                    <span>Sign Up / Login with Twitter</span>
                  </Link>
                  <Link to="#" className="social-button" id="google-connect">
                    <span>Sign Up / Login with Google</span>
                  </Link>

                  <span className="or-line">
                    <span>or</span>
                  </span>
                  <div id="main">
                    <div id="first">
                      {show === "login" ? (
                        <Form onSubmit={handleLogin} method="post">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              id="loginemail"
                              placeholder="E-mail"
                              required
                              value={loginInputData.email}
                              name="email"
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
                              id="loginpassword"
                              placeholder="Password"
                              required
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
                                type="button"
                                className="forgot-link"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setShow("forgotpassword");
                                }}
                              >
                                {" "}
                                Forgot password?{" "}
                              </Link>
                            </p>
                          </div>
                          <div className="">
                            <Button
                              id="login"
                              onClick={handleLogin}
                              className="btn btn-auth btn-lg"
                              disabled={props.login.buttonDisable}
                            >
                              {props.login.loadingButtonContent !== null
                                ? props.login.loadingButtonContent
                                : "Login"}
                            </Button>
                          </div>
                          <p id="two">Don't have an account yet?</p>
                          <p>
                            <Link
                              className="signup"
                              to="#"
                              id="signup"
                              onClick={(event) => {
                                event.preventDefault();
                                setShow("signup");
                              }}
                            >
                              {" "}
                              Sign up for{" "}
                              {configuration.get("configData.site_name")}
                            </Link>
                          </p>
                        </Form>
                      ) : null}
                      {show === "signup" ? (
                        <Form
                          onSubmit={handleSignup}
                          id="form"
                          method="post"
                          name="form"
                        >
                          <Form.Group controlId="formBasicName">
                            <Form.Control
                              type="text"
                              id="firstname"
                              placeholder="First Name"
                              required
                              value={signupInputData.first_name}
                              name="firstname"
                              onChange={(event) =>
                                setSignupInputData({
                                  ...signupInputData,
                                  first_name: event.currentTarget.value,
                                })
                              }
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicName">
                            <Form.Control
                              type="text"
                              id="lastname"
                              placeholder="Last Name"
                              required
                              value={signupInputData.last_name}
                              name="lastname"
                              onChange={(event) =>
                                setSignupInputData({
                                  ...signupInputData,
                                  last_name: event.currentTarget.value,
                                })
                              }
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              id="registeremail"
                              placeholder="E-mail"
                              required
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
                              id="registerpassword"
                              placeholder="Password"
                              required
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
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                            <p className="terms">
                              By signing up you agree to our{" "}
                              <Link to="#">Terms of Service</Link> and{" "}
                              <Link to="#">Privacy Policy</Link>.
                            </p>
                          </Form.Group>

                          <Form.Group controlId="formBasicName">
                            <Button
                              id="register"
                              onClick={handleSignup}
                              className="btn btn-auth btn-lg r-btn"
                              disabled={props.login.buttonDisable}
                            >
                              {props.signup.loadingButtonContent !== null
                                ? props.signup.loadingButtonContent
                                : "SIGN UP"}
                            </Button>
                          </Form.Group>
                          <p id="two">Already have an account?</p>
                          <p>
                            <Link
                              className="signup"
                              href="#"
                              id="signin"
                              onClick={(event) => {
                                event.preventDefault();
                                setShow("login");
                              }}
                            >
                              {" "}
                              Login for{" "}
                              {configuration.get("configData.site_name")}
                            </Link>
                          </p>
                        </Form>
                      ) : null}
                      {show === "forgotpassword" ? (
                        <Form onSubmit={handleForgotPassword} method="post">
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              id="loginemail"
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
                          </div>

                          <Form.Group controlId="formBasicName">
                            <Button
                              id="forgotpassword"
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
                          <p id="two">Already have an account?</p>
                          <p>
                            <Link
                              className="signup"
                              to="#"
                              id="signin"
                              onClick={(event) => {
                                event.preventDefault();
                                setShow("login");
                              }}
                            >
                              {" "}
                              Login for{" "}
                              {configuration.get("configData.site_name")}
                            </Link>
                          </p>
                        </Form>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  login: state.users.loginInputData,
  signup: state.users.registerInputData,
  forgotPassword: state.users.forgotPasswordInputData,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(LandingPageIndex);
