import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
} from "react-bootstrap";
import SendTipModal from "../helper/SendTipModal";
import BookmarkNav from "./BookmarkNav";

const BookmarksIndex = () => {
  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <div className="edit-profile bookmark-sec">
        <Container>
          <Row>
            <BookmarkNav />
            <Col sm={12} xs={12} md={8}>
              <div className="profile-post-area">
                <div className="bookmarkes-list bookmarks-right-side">
                  <div className="pull-left">
                    <h3>ALL BOOKMARKS</h3>
                  </div>
                  <div className="pull-right">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn btn-default dropdown-toggle bookmarks-filter"
                        type="button"
                        id="dropdown-basic"
                      >
                        <Image
                          src="assets/images/icons/sort.svg"
                          className="svg-clone"
                        />
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
              </div>

              <div className="post-list">
                <div className="post-header">
                  <div className="alignleft">
                    <Link className="title-container" to="#">
                      <Image
                        src="assets/images/avatar/user.jpg"
                        className="user-image img-responsive"
                      />
                      <div className="user-name">
                        <span className="post-user-name">John</span>
                        <span className="post-user-">@u63484651</span>
                      </div>
                    </Link>
                  </div>
                  <div className="alignright">
                    <div className="post-header-right-side">
                      <span className="post-time flex-content">
                        <span className="post-time">3 hours ago </span>
                        <Dropdown>
                          <Dropdown.Toggle
                            className="btn btn-default dropdown-toggle"
                            type="button"
                            id="dropdown-basic"
                          >
                            <Image
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
                                Hide paid blurred from the home feed
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
                      <Image
                        className="post-photo"
                        src="assets/images/post/post4.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div className="post-icons">
                  <div className="alignleft">
                    <Link to="#">
                      <Image
                        src="assets/images/icons/heart.svg"
                        className="svg-clone"
                      />
                    </Link>
                    <Link to="">
                      <Image
                        src="assets/images/icons/comment.svg"
                        className="svg-clone"
                      />
                    </Link>
                    <Button
                      type="button"
                      className="g-icon"
                      onClick={() => setSendTip(true)}
                    >
                      <Image
                        src="assets/images/icons/tip.svg"
                        className="svg-clone"
                      />

                      <span className="post-tip">SEND TIP</span>
                    </Button>
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
                  <Link
                    className="Show view-comments"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    View 11 comments
                  </Link>
                  <Link className="Hide view-comments">View less comments</Link>
                  {isVisible && (
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
                                Tom
                                <span className="comment-message">
                                  she's breathtaking
                                </span>
                              </span>
                              <small className="text-muted cat">
                                <Button>4:03 am</Button>
                                <Button>5 Likes</Button>
                                <Button>
                                  <i
                                    className="fas fa-users text-info"
                                    style={{ display: "none" }}
                                  ></i>
                                  Reply
                                </Button>
                              </small>
                            </div>
                          </Link>
                        </div>
                        <div className="alignright">
                          <Link to="#">
                            <Image
                              src="assets/images/icons/heart.svg"
                              width="16"
                            />
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
                                Robert Maskell
                                <span className="comment-message">
                                  Looks nice necklace?
                                </span>
                              </span>
                              <small className="text-muted cat">
                                <Button>4:03 am</Button>
                                <Button>5 Likes</Button>
                                <Button>
                                  <i
                                    className="fas fa-users text-info"
                                    style={{ display: "none" }}
                                  ></i>
                                  Reply
                                </Button>
                              </small>
                            </div>
                          </Link>
                        </div>
                        <div className="alignright">
                          <Link to="#">
                            <Image
                              src="assets/images/icons/heart.svg"
                              width="16"
                            />
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
                                -Johanaki-
                                <span className="comment-message">
                                  Yes, my goddess!!!
                                </span>
                              </span>
                              <small className="text-muted cat">
                                <Button>4:03 am</Button>
                                <Button>5 Likes</Button>
                                <Button>
                                  <i
                                    className="fas fa-users text-info"
                                    style={{ display: "none" }}
                                  ></i>
                                  Reply
                                </Button>
                              </small>
                            </div>
                          </Link>
                        </div>
                        <div className="alignright">
                          <Link to="#">
                            <Image
                              src="assets/images/icons/heart.svg"
                              width="16"
                            />
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
                              <Form.Control
                                as="textarea"
                                rows={3}
                                type="text"
                                className="form-control"
                                id="comment"
                                placeholder="Add a comment"
                                name="comment"
                              />
                            </div>
                            <Button type="submit" className="custom-btn">
                              <i class="fas fa-paper-plane"></i>
                            </Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </>
  );
};

export default BookmarksIndex;
