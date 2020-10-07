import React from "react";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";

const AuthHeader = () => {
  return (
    <header className="header landing-sec">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img
              src={configuration.get("configData.site_icon")}
              className="logo"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {localStorage.getItem("userLoginStatus") == "true" ? (
                <li className="nav-item active">
                  <Link className="nav-link smooth" to={"/dashboard"}>
                    Dashboard
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item active">
                    <Link className="nav-link smooth" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link smooth" to={"/signup"}>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <section className="sm-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="banner-info">
                <h3 className="title">
                  A Self Hosted Whitelabel Video Conferencing Suite - Cost and
                  Security
                </h3>
                <p className="desc">
                  Step.Live is an innovative approach to the video conferencing
                  paradigm. While you get all the bells and whistles that Zoom,
                  Microsoft Teams or Skype has to offer, you get none of their
                  bills. Also, you can sleep peacefully knowing all your
                  internal discussions, client communications etc are all in
                  your own company servers.
                </p>
                <a href="https://www.massivedynamics.com.au" target="_blank">
                  <button className="btn btn-primary width-200">
                    Contact Sales
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <img
                src={
                  window.location.origin +
                  "/assets/images/landing-page/banner-img.png"
                }
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AuthHeader;
