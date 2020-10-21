import React, { useState } from "react";

const LandingPageIndex = () => {
  const [show, setShow] = useState("login");

  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 hidden-xs iphone-slide-area">
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
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div className="sign-in form-section">
                <a href="#" aria-current="page" className="sign-in-logo">
                  <img src="./assets/images/logo.png" width="237" />
                </a>
                <p className="login-tagline">
                  Sign up to make money and interact with your fans!
                </p>
                <div className="forms-fields">
                  <a href="#" className="social-button" id="twitter-connect">
                    <span>Sign Up / Login with Twitter</span>
                  </a>
                  <a href="#" className="social-button" id="google-connect">
                    <span>Sign Up / Login with Google</span>
                  </a>

                  <span className="or-line">
                    <span>or</span>
                  </span>
                  <div id="main">
                    <div id="first">
                      {show === "login" ? (
                        <form action="" method="post">
                          <div className="form-group">
                            <input
                              type="text"
                              id="loginemail"
                              className="form-control"
                              placeholder="E-mail"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="password"
                              id="loginpassword"
                              className="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>
                          <div className="forget-password">
                            <p id="one">
                              <a
                                type="button"
                                className="forgot-link"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setShow("forgotpassword");
                                }}
                              >
                                {" "}
                                Forgot password?{" "}
                              </a>
                            </p>
                          </div>
                          <div className="">
                            <button
                              id="login"
                              onclick="location.href = 'home.php';"
                              className="btn btn-lg"
                            >
                              LOGIN
                            </button>
                          </div>
                          <p id="two">Don't have an account yet?</p>
                          <p>
                            <a
                              className="signup"
                              href="#"
                              id="signup"
                              onClick={(event) => {
                                event.preventDefault();
                                setShow("signup");
                              }}
                            >
                              {" "}
                              Sign up for XFans.com
                            </a>
                          </p>
                        </form>
                      ) : null}
                      {show === "signup" ? (
                        <form action="" id="form" method="post" name="form">
                          <div className="form-group">
                            <input
                              type="text"
                              id="registeremail"
                              className="form-control"
                              placeholder="E-mail"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="password"
                              id="registerpassword"
                              className="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="Name"
                              required
                            />
                          </div>

                          <div className="form-group round">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                            <p className="terms">
                              By signing up you agree to our{" "}
                              <a href="#">Terms of Service</a> and{" "}
                              <a href="#">Privacy Policy</a>.
                            </p>
                          </div>

                          <div className="form-group">
                            <button
                              id="register"
                              onclick="location.href = 'home.php';"
                              className="btn btn-lg r-btn"
                            >
                              SIGN UP
                            </button>
                          </div>
                          <p id="two">Already have an account?</p>
                          <p>
                            <a
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
                            </a>
                          </p>
                        </form>
                      ) : null}
                      {show === "forgotpassword" ? (
                        <form action="" method="post">
                          <div className="form-group">
                            <input
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
                              className="btn btn-lg"
                            >
                              Forgot Password
                            </button>
                          </div>
                          <p id="two">Already have an account?</p>
                          <p>
                            <a
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
                            </a>
                          </p>
                        </form>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageIndex;
