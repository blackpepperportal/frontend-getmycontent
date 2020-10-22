import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Row,
  Col,
  Tab,
  Dropdown,
  Image,
  ListGroup,
  Media,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const ListIndex = () => {
  return (
    <div className="lists">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="vertical-menu">
              <div className="bookmarkes-list bookmarks-right-side ">
                <div className="pull-left">
                  <Link className="bookmarkes-list" to="bookmarks.html">
                    <Image
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                    Lists
                  </Link>
                </div>
                <div className="pull-right">
                  <Link className="bookmarks-filter" to="#">
                    <Image
                      src="assets/images/icons/plus.svg"
                      className="svg-clone"
                      width=""
                    />
                  </Link>
                </div>
              </div>

              <div className="user-lists-heading">
                <div className="pull-left">
                  <h3>CUSTOM ORDER</h3>
                </div>
                <div className="pull-right">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-default dropdown-toggle bookmarks-filter"
                      type="button"
                      id="dropdown-basic"
                    >
                      <Image src="assets/images/icons/sort.svg" className="svg-clone" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right model-filter-dropdown">
                      <Form action="#">
                        <Media as="li">
                          <a role="heading" className="dropdown-header">
                            Subscription
                                        </a>
                        </Media>
                        <Media as="li">
                          <a>
                            {["radio"].map((type) => (
                              <div key={`custom-inline-${type}`}>
                                <Form.Check
                                  custom
                                  inline
                                  label="Recent"
                                  type={type}
                                  id={`custom-inline-${type}-1`}
                                />
                              </div>
                            ))}
                          </a>
                        </Media>
                        <Media as="li">
                          <a>
                            {["radio"].map((type) => (
                              <div key={`custom-inline-${type}`}>
                                <Form.Check
                                  custom
                                  inline
                                  label="Name"
                                  type={type}
                                  id={`custom-inline-${type}-2`}
                                />
                              </div>
                            ))}
                          </a>
                        </Media>
                      </Form>
                      <Media as="li" className="divider"></Media>
                      <Form action="#">
                        <Media as="li">
                          <a role="heading" className="dropdown-header">

                            Online Status
                                        </a>
                        </Media>
                        <Media as="li">
                          <a>
                            {["radio"].map((type) => (
                              <div key={`custom-inline-${type}`}>
                                <Form.Check
                                  custom
                                  inline
                                  label="Online"
                                  type={type}
                                  id={`custom-inline-${type}-3`}
                                />
                              </div>
                            ))}
                          </a>
                        </Media>
                        <Media as="li">
                          <a>
                            {["radio"].map((type) => (
                              <div key={`custom-inline-${type}`}>
                                <Form.Check
                                  custom
                                  inline
                                  label="Online"
                                  type={type}
                                  id={`custom-inline-${type}-4`}
                                />
                              </div>
                            ))}
                          </a>
                        </Media>
                        <Media as="li">
                          <a>
                            {["radio"].map((type) => (
                              <div key={`custom-inline-${type}`}>
                                <Form.Check
                                  custom
                                  inline
                                  label="Offline"
                                  type={type}
                                  id={`custom-inline-${type}-5`}
                                />
                              </div>
                            ))}
                          </a>
                        </Media>
                      </Form>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="user-lists">
                <Link to="following.php">
                  <div className="pull-left">
                    <h3>Fans</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </Link>
              </div>

              <div className="user-lists">
                <Link to="following.php">
                  <div className="pull-left">
                    <h3>Following</h3>
                    <span className="user-list-count">5 peoples</span>
                  </div>
                  <div className="pull-right">
                    <div className="user-list-avatar-lists">
                      <span className="list-avatar">
                        <Image
                          src="assets/images/avatar/s-user.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <Image
                          src="assets/images/avatar/s-user-3.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <Image
                          src="assets/images/avatar/user-2.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <Image
                          src="assets/images/avatar/user-3.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <Image
                          src="assets/images/avatar/user-5.jpg"
                          alt="user-images"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="user-lists">
                <Link to="following.php">
                  <div className="pull-left">
                    <h3>Favorites</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </Link>
              </div>
              <div className="user-lists">
                <Link to="following.php">
                  <div className="pull-left">
                    <h3>Bookmarks</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </Link>
              </div>
              <div className="user-lists">
                <Link to="#">
                  <div className="pull-left">
                    <h3>Close Friends</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListIndex;
