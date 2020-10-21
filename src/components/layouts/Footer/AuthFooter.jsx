import React, { Component } from "react";
import configuration from "react-global-configuration";
import { Link } from "react-router-dom";

class AuthFooter extends Component {
  render() {
    return (
      <>
        <footer>
          <div class="container">
            <div class="row">
              <div class="footer-section">
                <div class="col-md-4 col-sm-12 col-xs-12">
                  <ul class="list-inline">
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
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <ul class="list-inline">
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
                <div class="col-md-2 col-sm-12 col-xs-12">
                  <div class=" dropup">
                    <i class="fa fa-globe"></i>
                    <button
                      type="button"
                      class="dropdown-toggle countrySelect"
                      data-toggle="dropdown"
                    >
                      English
                    </button>

                    <div class="dropdown-menu mobile-popup">
                      <div class="pop-ups-bg">
                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
                            <input
                              type="radio"
                              name="radio"
                              checked="checked"
                            />
                            English
                          </label>
                        </span>

                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
                            <input type="radio" name="radio" />
                            Indian
                          </label>
                        </span>

                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
                            <input type="radio" name="radio" />
                            Chinese Simplified
                          </label>
                        </span>

                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
                            <input type="radio" name="radio" />
                            Chinese Traditional
                          </label>
                        </span>

                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
                            <input type="radio" name="radio" />
                            Korean
                          </label>
                        </span>

                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
                            <input type="radio" name="radio" />
                            Italian
                          </label>
                        </span>

                        <span href="#" class="dropdown-item radio-btns">
                          <label class="radio-size">
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
