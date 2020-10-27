import React, { useState, useEffect } from "react";
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
import SendTipModal from "../helper/SendTipModal";
import { fetchHomePostsStart } from "../../store/actions/HomeAction";
import { connect } from "react-redux";
import { saveCommentStart } from "../../store/actions/CommentsAction";

const HomePageIndex = (props) => {
  const [sendTip, setSendTip] = useState(false);

  useEffect(() => {
    props.dispatch(fetchHomePostsStart());
  }, []);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const [commentInputData, setCommentInputData] = useState({});

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    props.dispatch(saveCommentStart(commentInputData));
  };

  const [isVisible, setIsVisible] = React.useState(false);

  const showCommentSection = (event) => {
    setCommentInputData({ post_id: 1 });
    setIsVisible(!isVisible);
  };

  const handleLike = (event) => {
    event.preventDefault();
  };

  const handleBookmark = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="home-screen home-sec">
        <Container>
          <div className="search-row">
            <Link to="#" className="search-button">
              Home
            </Link>
            <div className="search-container">
              <Form className="search-box">
                <input
                  className="search-text"
                  type="text"
                  placeholder="Search Anything"
                />
                <Link to="#" className="search-btn">
                  <i class="fas fa-search"></i>
                </Link>
              </Form>
            </div>
          </div>
          <div className="">
            <Col xl={8} md={12} className="custom-padding">
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
                      <span className="post-time">
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
                    <Link to="#" onClick={handleLike}>
                      <Image
                        src="assets/images/icons/heart.svg"
                        className="svg-clone"
                      />
                    </Link>
                    <Link to="#" onClick={showCommentSection}>
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
                    <Link to="#" onClick={handleBookmark}>
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
                    onClick={showCommentSection}
                  >
                    {isVisible ? "Close comments" : "View comments"}
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
                                Tom{" "}
                                <span className="comment-message">
                                  she's breathtaking
                                </span>
                              </span>
                            </div>
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
                          <Form
                            className="form-inline"
                            action=""
                            onSubmit={handleCommentSubmit}
                          >
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
                                value={commentInputData.comment}
                                onChange={(event) =>
                                  setCommentInputData({
                                    ...commentInputData,
                                    comment: event.currentTarget.value,
                                  })
                                }
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
            <HomePageSuggesstion />
          </div>
        </Container>
      </div>
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </>
  );
};

const mapStateToPros = (state) => ({
  posts: state.home.homePost,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HomePageIndex);
