import React from "react";
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
  NavLink,
} from "react-bootstrap";

const HomePageSuggesstion = () => {
  return (
    <Col xl={4} md={12} className="suggest-col">
      <Row>
        <Col sm={12} xl={5} xs={12} md={6} className="mrg-btm-xs">
          <h4 className="suggestions">suggestions</h4>
        </Col>
        <Col sm={12} xl={7} xs={12} md={6} className="mrg-btm-xs">
          <div className="controls pull-right ">
            <Link to="#">
              <Image
                src="assets/images/icons/price-tag.svg"
                className="svg-clone"
              />
            </Link>
            <Link to="#">
              <Image
                src="assets/images/icons/refresh.svg"
                className="svg-clone"
              />
            </Link>

            <Link
              className="left"
              data-toggle="tooltip"
              data-placement="top"
              title="Prev"
              to="#carousel-example"
              data-slide="prev"
            >
              <Image src="assets/images/icons/left.svg" className="svg-clone" />
            </Link>
            <Link
              className="right"
              data-toggle="tooltip"
              data-placement="top"
              title="Next"
              to="#carousel-example"
              data-slide="next"
            >
              <Image
                src="assets/images/icons/right.svg"
                className="svg-clone mr-0"
              />
            </Link>
          </div>
        </Col>
        <Col sm={12} xl={12} xs={12} md={12}>
        <div
          id="carousel-example"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              <Row className="diplay-block">
                <Col sm={12} md={12}>
                  <div className="col-item">
                    <div className="photo">
                      <div className="swiper-slide">
                        <div className="b-friend">
                          <Link to="user-profile.php" className="">
                            <div className="b-friend__cover-wrapper">
                              <Image
                                src="assets/images/avatar/s-user-11.jpg"
                                alt="Yoga with Taz"
                                className="b-friend__cover"
                              />
                            </div>
                            <div className="b-free-label"> free</div>
                            <div className="b-friend__content">
                              <div className="b-friend__avatar">
                                <span className="g-avatar online_status_class m-w150 m-border-line">
                                  <Image
                                    src="assets/images/avatar/s-user.jpg"
                                    alt="Yoga with Taz"
                                  />
                                </span>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username m-like-link">
                                  <div className="g-user-name m-lg-size m-verified">
                                    
                                    Yoga with Taz
                                  </div>
                                </div>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username">
                                  <div className="g-user-username">
                                    
                                    @yogawithtaz
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-item">
                    <div className="photo">
                      <div className="swiper-slide">
                        <div className="b-friend">
                          <Link to="user-profile.php" className="">
                            <div className="b-friend__cover-wrapper">
                              <Image
                                src="assets/images/avatar/s-user-22.jpg"
                                alt="Yoga with Taz"
                                className="b-friend__cover"
                              />
                            </div>
                            <div className="b-free-label"> free</div>
                            <div className="b-friend__content">
                              <div className="b-friend__avatar">
                                <span className="g-avatar online_status_class m-w150 m-border-line">
                                  <Image
                                    src="assets/images/avatar/s-user-2.jpg"
                                    alt="Yoga with Taz"
                                  />
                                </span>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username m-like-link">
                                  <div className="g-user-name m-lg-size m-verified">
                                    
                                    Yoga with Taz
                                  </div>
                                </div>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username">
                                  <div className="g-user-username">
                                    
                                    @yogawithtaz
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-item">
                    <div className="photo">
                      <div className="swiper-slide">
                        <div className="b-friend">
                          <Link to="user-profile.php" className="">
                            <div className="b-friend__cover-wrapper">
                              <Image
                                src="assets/images/avatar/s-user-33.jpg"
                                alt="Yoga with Taz"
                                className="b-friend__cover"
                              />
                            </div>
                            <div className="b-free-label"> free</div>
                            <div className="b-friend__content">
                              <div className="b-friend__avatar">
                                <span className="g-avatar online_status_class m-w150 m-border-line">
                                  <Image
                                    src="assets/images/avatar/s-user-3.jpg"
                                    alt="Yoga with Taz"
                                  />
                                </span>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username m-like-link">
                                  <div className="g-user-name m-lg-size m-verified">
                                    
                                    Yoga with Taz
                                  </div>
                                </div>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username">
                                  <div className="g-user-username">
                                    
                                    @yogawithtaz
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row>
                <Col sm={12} md={12}>
                  <div className="col-item">
                    <div className="photo">
                      <div className="swiper-slide">
                        <div className="b-friend">
                          <Link to="user-profile.php" className="">
                            <div className="b-friend__cover-wrapper">
                              <Image
                                src="assets/images/avatar/s-user-44.jpg"
                                alt="Yoga with Taz"
                                className="b-friend__cover"
                              />
                            </div>
                            <div className="b-free-label"> free</div>
                            <div className="b-friend__content">
                              <div className="b-friend__avatar">
                                <span className="g-avatar online_status_class m-w150 m-border-line">
                                  <Image
                                    src="assets/images/avatar/s-user-4.jpg"
                                    alt="Yoga with Taz"
                                  />
                                </span>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username m-like-link">
                                  <div className="g-user-name m-lg-size m-verified">
                                    
                                    Yoga with Taz
                                  </div>
                                </div>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username">
                                  <div className="g-user-username">
                                    
                                    @yogawithtaz
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-item">
                    <div className="photo">
                      <div className="swiper-slide">
                        <div className="b-friend">
                          <Link to="user-profile.php" className="">
                            <div className="b-friend__cover-wrapper">
                              <Image
                                src="assets/images/avatar/s-user-55.jpg"
                                alt="Yoga with Taz"
                                className="b-friend__cover"
                              />
                            </div>
                            <div className="b-free-label"> free</div>
                            <div className="b-friend__content">
                              <div className="b-friend__avatar">
                                <span className="g-avatar online_status_class m-w150 m-border-line">
                                  <Image
                                    src="assets/images/avatar/s-user-5.jpg"
                                    alt="Yoga with Taz"
                                  />
                                </span>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username m-like-link">
                                  <div className="g-user-name m-lg-size m-verified">
                                    
                                    Yoga with Taz
                                  </div>
                                </div>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username">
                                  <div className="g-user-username">
                                    
                                    @yogawithtaz
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-item">
                    <div className="photo">
                      <div className="swiper-slide">
                        <div className="b-friend">
                          <Link to="user-profile.php" className="">
                            <div className="b-friend__cover-wrapper">
                              <Image
                                src="assets/images/avatar/s-user-66.jpg"
                                alt="Yoga with Taz"
                                className="b-friend__cover"
                              />
                            </div>
                            <div className="b-free-label"> free</div>
                            <div className="b-friend__content">
                              <div className="b-friend__avatar">
                                <span className="g-avatar online_status_class m-w150 m-border-line">
                                  <Image
                                    src="assets/images/avatar/s-user-6.jpeg"
                                    alt="Yoga with Taz"
                                  />
                                </span>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username m-like-link">
                                  <div className="g-user-name m-lg-size m-verified">
                                    
                                    Yoga with Taz
                                  </div>
                                </div>
                              </div>
                              <div className="b-username-row">
                                <div className="b-username">
                                  <div className="g-user-username">
                                    
                                    @yogawithtaz
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Col>
  );
};

export default HomePageSuggesstion;
