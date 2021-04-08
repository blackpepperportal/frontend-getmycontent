import React, { Component } from "react";
import configuration from "react-global-configuration";
import { Link } from "react-router-dom";
import { Form, Container, Row, Col, Dropdown, Media } from "react-bootstrap";
import { translate, t } from "react-multi-lang";

import {
  setTranslations,
  setDefaultLanguage,
  setLanguage,
  getLanguage,
} from "react-multi-lang";
import en from "../../translations/en.json";
import es from "../../translations/es.json";

class NewFooter extends Component {
  handleChangeLang = ({ currentTarget: input }) => {
    console.log(input.value);
    setLanguage(input.value);
    localStorage.setItem("lang", input.value);
    // window.location.reload();
  };

  render() {
    return (
      <>
        <footer className="new-footer-sec">
          <Container>
            <div className="footer-sec">
              <Row>
                <Col className="resp-col-width resp-mrg-btn-xs">
                    <h4>
                        ©  2021 fansclub
                    </h4>
                    <ul className="footer-link-sec list-unstyled">
                        <Media as="li">
                            <Link to="#">
                                Help
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                About
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                Contact
                            </Link>
                        </Media>
                    </ul>
                    <ul className="footer-social-link-sec list-unstyled">
                        <Media as="li">
                            <Link to="#">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </Media>
                    </ul>
                </Col>
                <Col className="resp-col-width resp-mrg-btn-xs">
                    <ul className="footer-link-sec list-unstyled">
                        <Media as="li">
                            <Link to="#">
                                Block
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                DMCA
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                U5C 2257
                            </Link>
                        </Media>
                    </ul>
                </Col>
                <Col className="resp-col-width resp-mrg-btn-xs">
                    <ul className="footer-link-sec list-unstyled">
                        <Media as="li">
                            <Link to="#">
                                Branding
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                Privacy
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                Acceptable User Ploicy
                            </Link>
                        </Media>
                    </ul>
                </Col>
                <Col className="resp-col-width">
                    <ul className="footer-link-sec list-unstyled">
                        <Media as="li">
                            <Link to="#">
                                Share
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                How it works
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                               Complaints Policy
                            </Link>
                        </Media>
                    </ul>
                </Col>
                <Col className="resp-col-width">
                    <ul className="footer-link-sec list-unstyled">
                        <Media as="li">
                            <Link to="#">
                                Terms of Service
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                                Refferals
                            </Link>
                        </Media>
                        <Media as="li">
                            <Link to="#">
                               Standard Contract between Fan and Creator
                            </Link>
                        </Media>
                    </ul>
                </Col>
              </Row>
            </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default translate(NewFooter);
