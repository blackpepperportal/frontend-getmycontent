import React, { Component } from "react";
import configuration from "react-global-configuration";
import { Link } from "react-router-dom";

class AuthFooter extends Component {
  state = { footer_pages1: [], footer_pages2: [], footer_pages3: [] };

  componentDidMount() {
    if (configuration.get("configData.footer_pages1")) {
      this.setState({
        footer_pages1: configuration.get("configData.footer_pages1"),
      });
    }
    if (configuration.get("configData.footer_pages2")) {
      this.setState({
        footer_pages2: configuration.get("configData.footer_pages2"),
      });
    }
    if (configuration.get("configData.footer_pages3")) {
      this.setState({
        footer_pages3: configuration.get("configData.footer_pages3"),
      });
    }
  }
  render() {
    return (
      <>
        <section className="sm-padding footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h5 className="title-head">
                  {configuration.get("configData.site_name")}
                </h5>
                <ul className="list-unstyled">
                  {this.state.footer_pages1.length > 0
                    ? this.state.footer_pages1.map((static_page) => (
                        <li
                          className="list-link"
                          key={static_page.static_page_unique_id}
                        >
                          <Link
                            to={`/page/${static_page.static_page_unique_id}`}
                          >
                            {static_page.title}
                          </Link>
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h5 className="title-head">Features</h5>
                <ul className="list-unstyled">
                  {this.state.footer_pages2.length > 0
                    ? this.state.footer_pages2.map((static_page) => (
                        <li
                          className="list-link"
                          key={static_page.static_page_unique_id}
                        >
                          <Link
                            to={`/page/${static_page.static_page_unique_id}`}
                          >
                            {static_page.title}
                          </Link>
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h5 className="title-head">Learn & Connect</h5>
                <ul className="list-unstyled">
                  {this.state.footer_pages3.length > 0
                    ? this.state.footer_pages3.map((static_page) => (
                        <li
                          className="list-link"
                          key={static_page.static_page_unique_id}
                        >
                          <Link
                            to={`/page/${static_page.static_page_unique_id}`}
                          >
                            {static_page.title}
                          </Link>
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <img
                  alt={configuration.get("configData.site_name")}
                  src={configuration.get("configData.site_icon")}
                  className="logo"
                />
                <p className="desc">
                  {configuration.get("configData.contact_address")}
                </p>
                <div className="ul-bottom__line mb-3">
                  {configuration.get("configData.facebook_link") ? (
                    <a
                      href={configuration.get("configData.facebook_link")}
                      className="btn btn-facebook btn-icon m-1"
                    >
                      <span className="ul-btn__icon">
                        <i className="i-Facebook-2"></i>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                  {configuration.get("configData.linkedin_link") ? (
                    <a
                      href={configuration.get("configData.linkedin_link")}
                      className="btn btn-linkedin btn-icon m-1"
                    >
                      <span className="ul-btn__icon">
                        <i className="i-Linkedin"></i>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                  {configuration.get("configData.twitter_link") ? (
                    <a
                      href={configuration.get("configData.twitter_link")}
                      className="btn btn-twitter btn-icon m-1"
                    >
                      <span className="ul-btn__icon">
                        <i className="i-Twitter"></i>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                  {configuration.get("configData.instagram_link") ? (
                    <a
                      href={configuration.get("configData.instagram_link")}
                      className="btn btn-instagram btn-icon m-1"
                    >
                      <span className="ul-btn__icon">
                        <i className="i-Instagram"></i>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sub-footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3>{configuration.get("configData.copyright_content")}</h3>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AuthFooter;
