import React, { useState } from "react";

const LandingPageIndex = () => {
  const [show, setShow] = useState("login");

  return (
    <>
      <section class="login-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 hidden-xs iphone-slide-area">
              <div class="dm-width">
                <div class="dm-device">
                  <div class="device">
                    <div class="screen">
                      <div class="slider">
                        <div class="slider__item slider__item--1"></div>
                        <div class="slider__item slider__item--2"></div>
                        <div class="slider__item slider__item--3"></div>
                        <div class="slider__item slider__item--4"></div>
                        <div class="slider__item slider__item--5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div class="sign-in form-section">
                <a href="#" aria-current="page" class="sign-in-logo">
                  <img src="./assets/images/logo.png" width="237" />
                </a>
                <p class="login-tagline">
                  Sign up to make money and interact with your fans!
                </p>
                <div class="forms-fields">
                  <a href="#" class="social-button" id="twitter-connect">
                    <span>Sign Up / Login with Twitter</span>
                  </a>
                  <a href="#" class="social-button" id="google-connect">
                    <span>Sign Up / Login with Google</span>
                  </a>

                  <span class="or-line">
                    <span>or</span>
                  </span>
                  <div id="main">
                    <div id="first">
                      {show === "login" ? (
                        <form action="" method="post">
                          <div class="form-group">
                            <input
                              type="text"
                              id="loginemail"
                              class="form-control"
                              placeholder="E-mail"
                              required
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="password"
                              id="loginpassword"
                              class="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>
                          <div class="forget-password">
                            <p id="one">
                              <a
                                type="button"
                                class="forgot-link"
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
                          <div class="">
                            <button
                              id="login"
                              onclick="location.href = 'home.php';"
                              class="btn btn-lg"
                            >
                              LOGIN
                            </button>
                          </div>
                          <p id="two">Don't have an account yet?</p>
                          <p>
                            <a
                              class="signup"
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
                          <div class="form-group">
                            <input
                              type="text"
                              id="registeremail"
                              class="form-control"
                              placeholder="E-mail"
                              required
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="password"
                              id="registerpassword"
                              class="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              id="name"
                              class="form-control"
                              placeholder="Name"
                              required
                            />
                          </div>

                          <div class="form-group round">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                            <p class="terms">
                              By signing up you agree to our{" "}
                              <a href="#">Terms of Service</a> and{" "}
                              <a href="#">Privacy Policy</a>.
                            </p>
                          </div>

                          <div class="form-group">
                            <button
                              id="register"
                              onclick="location.href = 'home.php';"
                              class="btn btn-lg r-btn"
                            >
                              SIGN UP
                            </button>
                          </div>
                          <p id="two">Already have an account?</p>
                          <p>
                            <a
                              class="signup"
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
                          <div class="form-group">
                            <input
                              type="text"
                              id="loginemail"
                              class="form-control"
                              placeholder="E-mail"
                              required
                            />
                          </div>

                          <div class="">
                            <button
                              id="login"
                              onclick="location.href = 'home.php';"
                              class="btn btn-lg"
                            >
                              Forgot Password
                            </button>
                          </div>
                          <p id="two">Already have an account?</p>
                          <p>
                            <a
                              class="signup"
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
