import React, { Component } from "react";
import configuration from "react-global-configuration";
import { Link } from "react-router-dom";

class AuthFooter extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="footer-section">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <ul className="list-inline">
                    <li>
                      <a href="#">2020 XFans</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <ul className="list-inline">
                    <li>
                      <a href="#"> FAQs </a>
                    </li>
                    <li>
                      <a href="#"> Terms </a>
                    </li>
                    <li>
                      <a href="#"> Privacy </a>
                    </li>
                    <li>
                      <a href="#"> Contact </a>
                    </li>
                    <li>
                      <a href="#"> How it works </a>
                    </li>
                    <li>
                      <a href="#"> USC 2257 </a>
                    </li>
                    <li>
                      <a href="#"> DMCA </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-12 col-xs-12">
                  <div className=" dropup">
                    <i className="fa fa-globe"></i>
                    <button
                      type="button"
                      className="dropdown-toggle countrySelect"
                      data-toggle="dropdown"
                    >
                      English
                    </button>

                    <div className="dropdown-menu mobile-popup">
                      <div className="pop-ups-bg">
                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input
                              type="radio"
                              name="radio"
                              checked="checked"
                            />
                            English
                          </label>
                        </span>

                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input type="radio" name="radio" />
                            Indian
                          </label>
                        </span>

                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input type="radio" name="radio" />
                            Chinese Simplified
                          </label>
                        </span>

                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input type="radio" name="radio" />
                            Chinese Traditional
                          </label>
                        </span>

                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input type="radio" name="radio" />
                            Korean
                          </label>
                        </span>

                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input type="radio" name="radio" />
                            Italian
                          </label>
                        </span>

                        <span href="#" className="dropdown-item radio-btns">
                          <label className="radio-size">
                            <input type="radio" name="radio" />
                            Japanese
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default AuthFooter;
