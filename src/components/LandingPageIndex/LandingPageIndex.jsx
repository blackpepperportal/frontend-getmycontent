import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import configuration from "react-global-configuration";
import SocialButton from "../helper/SocialButton";
import { translate, t } from "react-multi-lang";
import { connect } from "react-redux";
import {
  forgotPasswordStart,
  userLoginStart,
  userRegisterStart,
  usernameValidationStart,
} from "../../store/actions/UserAction";

const LandingPageIndex = (props) => {
  const [show, setShow] = useState("login");

  const [loginInputData, setLoginInputData] = useState({});

  const [signupInputData, setSignupInputData] = useState({});

  const [forgotPasswordInputData, setForgotPasswordInputData] = useState({});

  const [validationError, setValidationError] = useState("NO");
  
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

  const handleUsernameValidation = (event, username) => {
    setSignupInputData({
      ...signupInputData,
      username: username,
    })
    props.dispatch(usernameValidationStart({username:username}));
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
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
              className="hidden-xs iphone-slide-area resp-btm-lg flex-49"
            >
              <div className="dm-width">
                <div className="dm-device">
                  <div className="device">
                    <div className="screen">
                      <div className="slider">
                        <div className="slider__item slider__item--1">
                          <img
                            src={
                              window.location.origin +
                              "/assets/images/login-slider-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="slider__item slider__item--2">
                          {" "}
                          <img
                            src={
                              window.location.origin +
                              "/assets/images/login-slider-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        {/* <div className="slider__item slider__item--3"></div>
                        <div className="slider__item slider__item--4"></div>
                        <div className="slider__item slider__item--5"></div> */}
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
                  {configuration.get("configData.tag_name")}
                </p>
                <div className="forms-fields">
                  {configuration.get("configData.FB_CLIENT_ID") ? (
                    <SocialButton
                      provider="facebook"
                      appId={configuration.get("configData.FB_CLIENT_ID")}
                      onLoginSuccess={handleFacebookLogin}
                      onLoginFailure={handleSocialLoginFailure}
                      className="social-button"
                      id="facebook-connect"
                    >
                      <span>{t("signup")} / {t("login_with_facebook")}</span>
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
                      <span>{t("signup")} / {t("login_with_facebook")}</span>
                    </SocialButton>
                  ) : (
                    ""
                  )}
                  {/* <Link to="#" className="social-button" id="twitter-connect">
                    <span>Sign Up / Login with Twitter</span>
                  </Link>
                  <Link to="#" className="social-button" id="google-connect">
                    <span>Sign Up / Login with Google</span>
                  </Link> */}

                  {configuration.get("configData.GOOGLE_CLIENT_ID") ||
                  configuration.get("configData.FB_CLIENT_ID") ? (
                    <span className="or-line">
                      <span>or</span>
                    </span>
                  ) : (
                    <span classsName="login-or-hide"></span>
                  )}
                  <div id="main">
                    <div id="first">
                      {show === "login" ? (
                        <Form onSubmit={handleLogin} method="post">
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
                                type="button"
                                className="forgot-link"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setShow("forgotpassword");
                                }}
                              >
                                {" "}
                                {t("forgot_password")}{" "}
                              </Link>
                            </p>
                          </div>
                          <div className="">
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
                          <p id="two">{t("do_not_have_an_account")}</p>
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
                              {t("signup_for")}{" "}
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
                          {props.validation.isValid}
                          <Form.Group controlId="formBasicName">
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
                              <Form.Control.Feedback type="invalid">{t("username_already_taken")}</Form.Control.Feedback>
                            : ''}
                            {props.validation.isValid ? 
                              <Form.Control.Feedback>{t("looks_good")}</Form.Control.Feedback>
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
                              {t("signing_up_confirmation")}{" "}
                              <Link to={`/page/terms`} target="_blank">
                                {t("terms_of_service")}
                              </Link>{" "}
                              {t("and")}{" "}
                              <Link to={`/page/privacy`} target="_blank">
                                {t("privacy_policy")}
                              </Link>
                              .
                            </p>
                          </Form.Group>

                          <Form.Group controlId="formBasicName">
                            <Button
                              id="register"
                              type="submit"
                              onClick={handleSignup}
                              className="btn btn-auth btn-lg r-btn"
                              disabled={props.login.buttonDisable}
                            >
                              {props.signup.loadingButtonContent !== null
                                ? props.signup.loadingButtonContent
                                : "SIGN UP"}
                            </Button>
                          </Form.Group>
                          <p id="two">{t("already_have_an_account")}</p>
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
                              {t("login_for")}{" "}
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
                          </div>

                          <Form.Group controlId="formBasicName">
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
                          <p id="two">{t("already_have_an_account")}</p>
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
                              {t("login_for")}{" "}
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
  validation: state.users.validationInputData,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(translate(LandingPageIndex));
