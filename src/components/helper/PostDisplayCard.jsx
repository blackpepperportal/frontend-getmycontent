import React, { useState } from "react";
import { Dropdown, Image, Media, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveBookmarkStart } from "../../store/actions/BookmarkAction";
import {
  fetchCommentsStart,
  saveCommentStart,
} from "../../store/actions/CommentsAction";
import { savePostLikeStart } from "../../store/actions/PostLikesAction";
import ImageLoader from "./ImageLoader";
import SendTipModal from "./SendTipModal";
import PPVPaymentModal from "./PPVPaymentModal";
import ReactPlayer from "react-player/lazy";
import { createNotification } from "react-redux-notify/lib/modules/Notifications";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getSuccessNotificationMessage } from "../helper/NotificationMessage";
import {
  deletePostStart,
  saveReportPostStart,
} from "../../store/actions/PostAction";
import { saveBlockUserStart } from "../../store/actions/UserAction";

const PostDisplayCard = (props) => {
  const { post } = props;
  let totalLikes = props.post.total_likes ? props.post.total_likes : 0;

  const [PPVPayment, setPPVPayment] = useState(false);
  const [sendTip, setSendTip] = useState(false);
  const [commentInputData, setCommentInputData] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const [bookmarkStatus, setBookmarkStatus] = useState("");
  const [ReportPostStatus, setReportPostStatus] = useState(false);
  const [BlockUserStatus, setBlockUserStatus] = useState(false);
  const [postDisplayStatus, setPostDisplayStatus] = useState(true);
  const [likeStatus, setLikeStatus] = useState("");

  const closeSendTipModal = () => {
    setSendTip(false);
  };
  const closePPVPaymentModal = () => {
    setPPVPayment(false);
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

  const handleLike = (event, status) => {
    event.preventDefault();
    setLikeStatus(status);
    props.dispatch(savePostLikeStart({ post_id: post.post_id }));
  };

  const handleBookmark = (event, post, status) => {
    event.preventDefault();
    setBookmarkStatus(status);
    props.dispatch(saveBookmarkStart({ post_id: post.post_id }));
  };

  const handleReportPost = (event, post) => {
    event.preventDefault();
    setPostDisplayStatus(false);
    props.dispatch(saveReportPostStart({ post_id: post.post_id }));
  };
  const handleBlockUser = (event, post) => {
    event.preventDefault();
    setPostDisplayStatus(false);
    props.dispatch(saveBlockUserStart({ user_id: post.user_id }));
  };

  const handleDeletePost = (event, post) => {
    event.preventDefault();
    setPostDisplayStatus(false);
    props.dispatch(deletePostStart({ post_id: post.post_id }));
  };

  const closeCommentSection = (event) => {
    setIsVisible(false);
  };
  const onCopy = (event) => {
    const notificationMessage = getSuccessNotificationMessage(
      "Link to the post was copied to clipboard!"
    );
    props.dispatch(createNotification(notificationMessage));
  };

  return (
    <>
      {postDisplayStatus == true ? (
        <div className="post-list">
          <div className="post-header">
            <div className="alignleft">
              <Link
                className="title-container"
                to={`/model-profile/${post.user_unique_id}`}
              >
                <ImageLoader
                  image={post.user_picture}
                  className="user-image img-responsive"
                />

                <div className="user-name">
                  <span className="post-user-name">
                    {post.user_displayname}
                  </span>
                  <span className="post-user-">@{post.username}</span>
                </div>
              </Link>
            </div>
            <div className="alignright">
              <div className="post-header-right-side">
                <span className="post-time flex-content">
                  <span className="post-time">
                    {post.publish_time_formatted}
                  </span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-default dropdown-toggle"
                      type="button"
                      id="dropdown-basic"
                    >
                      <Image
                        src={
                          window.location.origin +
                          "/assets/images/icons/vertical-dots.svg"
                        }
                        className="svg-clone vertical-dots"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <CopyToClipboard text={post.share_link} onCopy={onCopy}>
                        <Media as="li">
                          <Link to="#"> Copy link to post </Link>
                        </Media>
                      </CopyToClipboard>

                      {/* <Media as="li">
                    <Link to="#">Hide paid blurred from the home feed</Link>
                  </Media> */}
                      <Media as="li" className="divider"></Media>
                      <Media as="li">
                        <Link
                          to="#"
                          onClick={(event) => handleReportPost(event, post)}
                        >
                          {" "}
                          I don't like this post{" "}
                        </Link>
                      </Media>
                      <Media as="li">
                        <Link
                          to="#"
                          onClick={(event) => handleBlockUser(event, post)}
                        >
                          {" "}
                          I don't like the user. Add to blocklists.
                        </Link>
                      </Media>
                      {post.delete_btn_status == 1 ? (
                        <>
                          <Media as="li" className="divider"></Media>

                          <Media as="li">
                            <Link
                              to="#"
                              onClick={(event) => handleDeletePost(event, post)}
                            >
                              Delete Post
                            </Link>
                          </Media>
                        </>
                      ) : null}
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
                {post.payment_info.is_user_needs_pay === 1 ? (
                  <span
                    className="post-time"
                    onClick={() => setPPVPayment(true)}
                  >
                    <span className="post-tip-lock">
                      {post.amount_formatted}{" "}
                    </span>
                    <Link to="#" onClick={() => setPPVPayment(true)}>
                      <i className="fa fa-lock"></i>
                    </Link>
                  </span>
                ) : post.amount > 0 ? (
                  <span className="post-time">
                    <span className="post-tip-lock">
                      {post.amount_formatted}{" "}
                    </span>
                    <Link to="#">
                      <i className="fa fa-unlock text-success"></i>
                    </Link>
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="post-content">
            <p>{post.content != undefined ? post.content : ""}</p>
            {post.postFiles
              ? post.postFiles.length > 0
                ? post.postFiles.map((postFile, index) =>
                    postFile.file_type === "image" ? (
                      <div className="post-image" key={index}>
                        <div className="">
                          <div className="gallery js-gallery">
                            <Image
                              src={postFile.post_file}
                              className="post-view-image"
                            />
                          </div>
                        </div>
                      </div>
                    ) : postFile.file_type === "video" ? (
                      <div className="post-image" key={index}>
                        <div className="">
                          <div className="gallery js-gallery">
                            {post.payment_info.is_user_needs_pay == 1 ? (
                              <Image
                                src={postFile.post_file}
                                className="post-view-image"
                              />
                            ) : (
                              <ReactPlayer
                                light={postFile.blur_file}
                                url={postFile.post_file}
                                controls={true}
                                width="100%"
                                height="360px"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )
                : null
              : null}
          </div>

          <div className="post-icons">
            <div className="alignleft">
              {likeStatus !== "" ? (
                <>
                  <>
                    {likeStatus === "added" ? (
                      <Link
                        to="#"
                        onClick={(event) => handleLike(event, "removed")}
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/heart-active.svg"
                          }
                          className="svg-clone"
                        />
                      </Link>
                    ) : null}
                  </>
                  <>
                    {likeStatus === "removed" ? (
                      <Link
                        to="#"
                        onClick={(event) => handleLike(event, "added")}
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/heart.svg"
                          }
                          className="svg-clone"
                        />
                      </Link>
                    ) : null}
                  </>
                </>
              ) : post.is_user_liked == 1 ? (
                <Link to="#" onClick={(event) => handleLike(event, "removed")}>
                  <Image
                    src={
                      window.location.origin +
                      "/assets/images/icons/heart-active.svg"
                    }
                    className="svg-clone"
                  />
                </Link>
              ) : (
                <Link to="#" onClick={(event) => handleLike(event, "added")}>
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/heart.svg"
                    }
                    className="svg-clone"
                  />
                </Link>
              )}

              <Link
                to="#"
                onClick={(event) => showCommentSection(event, post.post_id)}
              >
                <Image
                  src={
                    window.location.origin + "/assets/images/icons/comment.svg"
                  }
                  className="svg-clone"
                />
              </Link>

              <Button
                type="button"
                className="g-icon"
                onClick={() => setSendTip(true)}
              >
                <Image
                  src={window.location.origin + "/assets/images/icons/tip.svg"}
                  className="svg-clone"
                />

                <span className="post-tip">SEND TIP</span>
              </Button>
            </div>
            <div className="alignright">
              {bookmarkStatus !== "" ? (
                <>
                  <>
                    {bookmarkStatus === "added" ? (
                      <Link
                        to="#"
                        onClick={(event) =>
                          handleBookmark(event, post, "removed")
                        }
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/bookmark-active.svg"
                          }
                          className="svg-clone"
                        />
                      </Link>
                    ) : null}
                  </>
                  <>
                    {bookmarkStatus === "removed" ? (
                      <Link
                        to="#"
                        onClick={(event) =>
                          handleBookmark(event, post, "added")
                        }
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/bookmark.svg"
                          }
                          className="svg-clone"
                        />
                      </Link>
                    ) : null}
                  </>
                </>
              ) : post.is_user_bookmarked == 1 ? (
                <Link
                  to="#"
                  onClick={(event) => handleBookmark(event, post, "removed")}
                >
                  <Image
                    src={
                      window.location.origin +
                      "/assets/images/icons/bookmark-active.svg"
                    }
                    className="svg-clone"
                  />
                </Link>
              ) : (
                <Link
                  to="#"
                  onClick={(event) => handleBookmark(event, post, "added")}
                >
                  <Image
                    src={
                      window.location.origin +
                      "/assets/images/icons/bookmark.svg"
                    }
                    className="svg-clone"
                  />
                </Link>
              )}
            </div>
          </div>

          <div className="likes alignleft">
            <p>{totalLikes} Likes</p>
            {isVisible && commentInputData.post_id === post.post_id ? (
              <Link
                className="Show view-comments"
                onClick={closeCommentSection}
              >
                Close Comments
              </Link>
            ) : (
              <Link
                className="Show view-comments text-muted"
                onClick={(event) => showCommentSection(event, post.post_id)}
              >
                View Comments
              </Link>
            )}
            {isVisible && commentInputData.post_id === post.post_id ? (
              <div id="target">
                {props.comments.loading
                  ? "Loading..."
                  : props.comments.data.post_comments.length > 0
                  ? props.comments.data.post_comments.map((comment) => (
                      <div className="row comment-row">
                        <div className="alignleft">
                          <Link className="title-container" to="#">
                            <Image
                              src={comment.user_picture}
                              className="user-image img-responsive"
                            />
                            <div className="user-name">
                              <span className="card-title">
                                {comment.user_displayname}{" "}
                                <span className="comment-message">
                                  {comment.comment}
                                </span>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))
                  : ""}

                <div className="comment-box">
                  <div className="comment-box-form">
                    <Form
                      className="form-inline"
                      action=""
                      onSubmit={handleCommentSubmit}
                    >
                      <div className="user-picture">
                        <Link className="title-container" to="#">
                          <Image
                            src={localStorage.getItem("user_picture")}
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
          <SendTipModal
            sendTip={sendTip}
            closeSendTipModal={closeSendTipModal}
            username={post.username}
            userPicture={post.user_picture}
            name={post.user_displayname}
            post_id={post.post_id}
            user_id={post.user_id}
          />
          <PPVPaymentModal
            PPVPayment={PPVPayment}
            closePPVPaymentModal={closePPVPaymentModal}
            username={post.username}
            userPicture={post.user_picture}
            name={post.user_displayname}
            post_id={post.post_id}
            user_id={post.user_id}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToPros = (state) => ({
  comments: state.comment.comments,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(PostDisplayCard);
