import React, { useState } from "react";
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
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveBookmarkStart } from "../../store/actions/BookmarkAction";
import {
  fetchCommentsStart,
  saveCommentStart,
} from "../../store/actions/CommentsAction";
import ImageLoader from "./ImageLoader";
import SendTipModal from "./SendTipModal";

const PostDisplayCard = (props) => {
  const { post } = props;

  const [sendTip, setSendTip] = useState(false);
  const [commentInputData, setCommentInputData] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    props.dispatch(saveCommentStart(commentInputData));
    setCommentInputData({});
  };

  const showCommentSection = (event, post_id) => {
    setCommentInputData({ post_id: post_id });
    setIsVisible(true);
    props.dispatch(fetchCommentsStart({ post_id: post_id }));
  };

  const handleLike = (event) => {
    event.preventDefault();
  };

  const handleBookmark = (event, post) => {
    event.preventDefault();
    props.dispatch(saveBookmarkStart({ post_id: post.post_id }));
  };

  const closeCommentSection = (event) => {
    setIsVisible(false);
  };

  return (
    <div className="post-list">
      <div className="post-header">
        <div className="alignleft">
          <Link className="title-container" to="user-profile.php">
            <ImageLoader
              image={post.user_picture}
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
                    <Link to="#">Hide paid blurred from the home feed</Link>
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
        <p>{post.content}</p>

        <div className="post-image">
          <div className="">
            <div className="gallery js-gallery">
              <Image src="assets/images/g-3.jpg" className="post-view-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="post-icons">
        <div className="alignleft">
          <Link to="#" onClick={handleLike}>
            <Image src="assets/images/icons/heart.svg" className="svg-clone" />
          </Link>
          <Link
            to="#"
            onClick={(event) => showCommentSection(event, post.post_id)}
          >
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
            <Image src="assets/images/icons/tip.svg" className="svg-clone" />

            <span className="post-tip">SEND TIP</span>
          </Button>
        </div>
        <div className="alignright">
          <Link to="#" onClick={(event) => handleBookmark(event, post)}>
            <Image
              src="assets/images/icons/bookmark.svg"
              className="svg-clone"
            />
          </Link>
        </div>
      </div>

      <div className="likes alignleft">
        <p>78 Likes</p>
        {isVisible && commentInputData.post_id === post.post_id ? (
          <Link className="Show view-comments" onClick={closeCommentSection}>
            Close Comments
          </Link>
        ) : (
          <Link
            className="Show view-comments"
            onClick={(event) => showCommentSection(event, post.post_id)}
          >
            View comments
          </Link>
        )}
        {isVisible && commentInputData.post_id === post.post_id ? (
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
                  <Button
                    type="submit"
                    className="custom-btn"
                    onClick={handleCommentSubmit}
                  >
                    <i class="fas fa-paper-plane"></i>
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </div>
  );
};

const mapStateToPros = (state) => ({
  comments: state.comment.comments,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(PostDisplayCard);