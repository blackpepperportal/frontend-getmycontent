import React from "react";
import HomePageSuggesstion from "./HomePageSuggesstion";
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


const HomePageIndex = () => {
  return (
    <>
      <div className="home-screen home-sec">
        <Container>
          <Row className="search-row">
            <Link to="#" className="search-button">
              Home
            </Link>
            <div className="search-container">
              <Form>
                <FormControl
                  className="search expandright"
                  id="searchright"
                  type="search"
                  name="q"
                  placeholder="Search"
                />
                <label className="button searchbutton" for="searchright">
                  <span className="mglass">&#9906;</span>
                </label>
              </Form>
            </div>
          </Row>
          <div className="">
            <Col md={8} className="custom-padding">
              <Container>
                <Row>
                  <div id="stories" className="storiesWrapper"></div>
                </Row>
              </Container>
              <div className="post-list">
                <div className="post-header">
                  <div className="alignleft">
                    <Link className="title-container" to="user-profile.php">
                      <Image
                        src="assets/images/avatar/user.jpg"
                        className="user-image img-responsive"
                      />
                      <div className="user-name">
                        <span className="post-user-name">Lexy</span>
                        <span className="post-user-">@lexypanterratwerk</span>
                      </div>
                    </Link>
                  </div>
                  <div className="alignright">
                    <div className="post-header-right-side">
                      <span className="post-time">
                        {" "}
                        <span className="post-time">3 hours ago </span>
                        <Dropdown>
                          <Dropdown.Toggle
                            className="btn btn-default dropdown-toggle"
                            type="button"
                            id="dropdown-basic">
                            <img
                              src="assets/images/icons/vertical-dots.svg"
                              className="svg-clone vertical-dots"
                            />
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">

                            <Media as="li">
                              <Link to="#"> Copy link to post </Link>
                            </Media>
                            <Media as="li">
                              <Link to="#">
                                {" "}
                          Hide paid blurred from the home feed{" "}
                              </Link>
                            </Media>
                            <Media as="li" className="divider"></Media>
                            <Media as="li">
                              <Link to="#"> I don't like this post </Link>
                            </Media>
                            <Media as="li">
                              <Link to="#"> Hide user's posts from feed </Link>
                            </Media>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                      <span className="post-time">
                        {" "}
                        <span className="post-tip-lock">$30 </span>
                        <Link to="#">
                          <i className="fa fa-lock"></i>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="post-content">
                  <p>
                    VIBIN IN THE WILDERNESS!! bending over twerkin in this see
                    thru skirt as i walk up the stairs.. the camera view is
                    below me & my skirt keeps coming up! this thong isn’t
                    covering much!
                  </p>

                  <div className="post-image">
                    <div className="">
                      <div className="gallery js-gallery">
                        <Image
                          src="assets/images/g-3.jpg"
                          className="post-view-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="post-icons">
                  <div className="alignleft">
                    <Link href="">
                      <Image
                        src="assets/images/icons/heart.svg"
                        className="svg-clone"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src="assets/images/icons/comment.svg"
                        className="svg-clone"
                      />
                    </Link>

                    <Button
                      type=""
                      className="g-icon"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      <Image
                        src="assets/images/icons/tip.svg"
                        className="svg-clone"
                      />

                      <span className="post-tip">SEND TIP</span>
                    </Button>

                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <Button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </Button>
                            <h4 className="modal-title"> Send tip </h4>
                          </div>
                          <div className="modal-body">
                            <div className="header-userinfo">
                              <div className="g-avatar online_status_class">
                                <Image
                                  src="assets/images/avatar/user-4.jpg"
                                  alt="💕🦋Sarai Rollins🦋💕"
                                  className="tips__user__img"
                                />
                              </div>
                              <div className="popup-username-row">
                                <div className="pop-username">
                                  <div className=""> 💕🦋Sarai Rollins🦋💕</div>
                                </div>
                              </div>
                              <div className="popup-username-row">
                                <span className="pop-username popuser-realname">
                                  <div className="pop-user-username">
                                    {" "}
                              @sarairollins
                            </div>
                                </span>
                              </div>
                            </div>

                            <div className="floating-form">
                              <div className="floating-label">
                                <Form.Control
                                  className="floating-input"
                                  type="text"
                                  placeholder=" "
                                />
                                <span className="highlight"></span>
                                <label>Tip amount</label>
                              </div>

                              <div className="floating-label">
                                <Form.Control
                                  className="floating-input"
                                  type="text"
                                  placeholder=" "
                                />
                                <span className="highlight"></span>
                                <label>Message (optional)</label>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <Button
                              type="button"
                              className="btn btn-default"
                              data-dismiss="modal"
                            >
                              CANCEL
                            </Button>
                            <Button
                              type="button"
                              className="btn btn-default"
                              data-dismiss="modal"
                            >
                              SEND TIP
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="alignright">
                    <Link to="#">
                      <Image
                        src="assets/images/icons/bookmark.svg"
                        className="svg-clone"
                      />
                    </Link>
                  </div>
                </div>

                <div className="likes alignleft">
                  <p>78 Likes</p>
                  <Button className="Show view-comments">
                    View 11 comments
                  </Button>
                  <Button className="Hide view-comments">
                    View less comments
                  </Button>
                  <div id="target">
                    <div className="row comment-row">
                      <div className="alignleft">
                        <Link className="title-container" to="#">
                          <Image
                            src="assets/images/avatar/user.jpg"
                            className="user-image img-responsive"
                          />
                          <div className="user-name">
                            <span className="card-title">
                              Tom{" "}
                              <span className="comment-message">
                                she's breathtaking
                        </span>
                            </span>
                            <small className="text-muted cat">
                              <Button>4:03 am</Button>
                              <Button>5 Likes</Button>
                              <Button>
                                {" "}
                                <i
                                  className="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </Button>
                            </small>
                          </div>
                        </Link>
                      </div>
                      <div className="alignright">
                        <Link to="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </Link>
                      </div>
                    </div>

                    <div className="row comment-row">
                      <div className="alignleft">
                        <Link className="title-container" to="#">
                          <Image
                            src="assets/images/avatar/user-2.jpg"
                            className="user-image img-responsive"
                          />
                          <div className="user-name">
                            <span className="card-title">
                              Robert Maskell{" "}
                              <span className="comment-message">
                                Looks nice necklace?
                        </span>
                            </span>
                            <small className="text-muted cat">
                              <Button>4:03 am</Button>
                              <Button>5 Likes</Button>
                              <Button>
                                {" "}
                                <i
                                  className="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </Button>
                            </small>
                          </div>
                        </Link>
                      </div>
                      <div className="alignright">
                        <Link to="#">
                          <Image src="assets/images/icons/heart.svg" width="16" />
                        </Link>
                      </div>
                    </div>

                    <div className="row comment-row">
                      <div className="alignleft">
                        <Link className="title-container" to="#">
                          <Image
                            src="assets/images/avatar/user-3.jpg"
                            className="user-image img-responsive"
                          />
                          <div className="user-name">
                            <span className="card-title">
                              -Johanaki-{" "}
                              <span className="comment-message">
                                Yes, my goddess!!!
                        </span>
                            </span>
                            <small className="text-muted cat">
                              <Button>4:03 am</Button>
                              <Button>5 Likes</Button>
                              <Button>
                                {" "}
                                <i
                                  className="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                              Reply
                            </Button>
                            </small>
                          </div>
                        </Link>
                      </div>
                      <div className="alignright">
                        <Link to="#">
                          <Image src="assets/images/icons/heart.svg" width="16" />
                        </Link>
                      </div>
                    </div>

                    <div className="comment-box">
                      <div className="alignleft">
                        <Link to="#">
                          <Image src="assets/images/icons/gif.png" />
                        </Link>
                      </div>
                      <div className="alignright">
                        <Link to="#">
                          <Image src="assets/images/icons/smile.png" />
                        </Link>
                      </div>
                      <div className="comment-box-form">
                        <Form className="form-inline" action="">
                          <div className="user-picture">
                            <Link className="title-container" to="#">
                              <Image
                                src="assets/images/avatar/user-3.jpg"
                                className="user-image img-responsive"
                              />
                            </Link>
                          </div>
                          <div className="text-box">
                          <Form.Control as="textarea" rows={3} 
                            type="text"
                            className="form-control"
                            id="comment"
                            placeholder="Add a comment"
                            name="comment"
                          />
                          </div>
                          <Button type="submit" className="custom-btn">
                            <i className="fa fa-paper-plane-o"></i>
                          </Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <HomePageSuggesstion />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePageIndex;
