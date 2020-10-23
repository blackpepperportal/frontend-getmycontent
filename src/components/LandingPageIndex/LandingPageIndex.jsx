import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
  Dropdown,
  DropdownButton,
  Image,
  Badge,
  Media,
} from "react-bootstrap";

const LandingPageIndex = () => {
  const [show, setShow] = useState("login");

  return (
    <>
      <div className="login-section">
        <Container>
          <Row>
            <Col lg={6} xl={6} md={12} sm={12} xs={12} className="hidden-xs iphone-slide-area resp-btm-lg">
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
                  <Image src="./assets/images/logo.png" width="237" />
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
                        <Form action="" method="post">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              id="loginemail"
                              placeholder="E-mail"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                            <Form.Control
                              type="password"
                              id="loginpassword"
                              placeholder="Password"
                              required
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
                              onclick="location.href = 'home.php';"
                              className="btn btn-auth btn-lg"
                            >
                              LOGIN
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
                              Sign up for XFans.com
                            </Link>
                          </p>
                        </Form>
                      ) : null}
                      {show === "signup" ? (
                        <Form action="" id="form" method="post" name="form">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              id="registeremail"
                              placeholder="E-mail"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                            <Form.Control
                              type="password"
                              id="registerpassword"
                              placeholder="Password"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formBasicName">
                            <Form.Control
                              type="text"
                              id="name"
                              placeholder="Name"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formBasicName" className="round">
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
                              onclick="location.href = 'home.php';"
                              className="btn btn-auth btn-lg r-btn"
                            >
                              SIGN UP
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
                              Login for XFans.com
                            </Link>
                          </p>
                        </Form>
                      ) : null}
                      {show === "forgotpassword" ? (
                        <Form action="" method="post">
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              id="loginemail"
                              className="form-control"
                              placeholder="E-mail"
                              required
                            />
                          </div>

                          <div className="">
                            <button
                              id="login"
                              onclick="location.href = 'home.php';"
                              className="btn btn-auth btn-lg"
                            >
                              Forgot Password
                            </button>
                          </div>
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
                              Login for XFans.com
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

export default LandingPageIndex;
