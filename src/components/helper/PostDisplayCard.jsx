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
import ReportModeModal from "./ReportModeModal";
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
import VerifiedBadgeNoShadow from "../Handlers/VerifiedBadgeNoShadow";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PostDisplayCard = (props) => {
  const { post } = props;
  let totalLikes = props.post.total_likes ? props.post.total_likes : 0;

  const [PPVPayment, setPPVPayment] = useState(false);
  const [sendTip, setSendTip] = useState(false);
  const [commentInputData, setCommentInputData] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const [reportMode, setReportMode] = useState(false);

  const closeReportModeModal = () => {
    setReportMode(false);
  };

  const [bookmarkStatus, setBookmarkStatus] = useState("");
  const [postDisplayStatus, setPostDisplayStatus] = useState(true);
  const [likeStatus, setLikeStatus] = useState("");
  const [likeCount, setLikeCount] = useState(totalLikes);
  const [modalStatus, setModalStatus] = useState(0);

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
    if (status == "added") {
      let currentLikeCount = likeCount + 1;
      setLikeCount(currentLikeCount);
    } else {
      let currentLikeCount = likeCount - 1;
      setLikeCount(currentLikeCount);
    }
  };

  const handlePPVPayment = (event,status) => {
    event.preventDefault();
    if(status && status == 1) {
      setModalStatus(0);
      setPPVPayment(true);
    } else {
      setModalStatus(1);
      setPPVPayment(false);
    }
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
              <Link className="title-container" to={`/${post.user_unique_id}`}>
                <ImageLoader
                  image={post.user_picture}
                  className="user-image img-responsive"
                />

                <div className="user-name">
                  <span className="post-user-name">
                    <span className="user-name-post">{post.user_displayname}</span>
                    {"  "}
                    {post.is_verified_badge == 1 ? (
                      <VerifiedBadgeNoShadow/>
                    ) : null}
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
                          <Link to="#" className="dropdown-a">
                            {" "}
                            Copy link to post{" "}
                          </Link>
                        </Media>
                      </CopyToClipboard>
                      <Media as="li" className="divider"></Media>

                      {localStorage.getItem("userId") != post.user_id ? (
                        <Media as="li">
                          <Link
                            to=""
                            onClick={(event) => handleReportPost(event, post)}
                            className="dropdown-a"
                          >
                            Report
                          </Link>
                        </Media>
                      ) : null}
                      {/* Report Post with reasons start */}
                      {/* <Media as="li">
                        <Link onClick={() => setReportMode(true)}>
                          {" "}
                          Report{" "}
                        </Link>
                      </Media> */}
                      {/* Report Post with reasons end */}

                      {localStorage.getItem("userId") != post.user_id ? (
                        <Media as="li">
                          <Link
                            to="#"
                            onClick={(event) => handleBlockUser(event, post)}
                            className="dropdown-a"
                          >
                            {" "}
                            I don't like the user. Add to blocklists.
                          </Link>
                        </Media>
                      ) : null}
                      {post.delete_btn_status == 1 ? (
                        <>
                          <Media as="li" className="divider"></Media>

                          <Media as="li">
                            <Link
                              to="#"
                              onClick={(event) => handleDeletePost(event, post)}
                              className="dropdown-a"
                            >
                              Delete Post
                            </Link>
                          </Media>
                        </>
                      ) : null}
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
                {post.is_user_needs_pay === 1 ? (
                  <span
                    className="post-time"
                    onClick={(event) => handlePPVPayment(event,post.is_user_needs_pay)}
                  >
                    <span className="post-tip-lock">
                      {post.amount_formatted}{" "}
                    </span>
                    <Link to="#" onClick={(event) => handlePPVPayment(event,post.is_user_needs_pay)}>
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
                      <Link to="#"
                        onClick={(event) => handlePPVPayment(event,post.payment_info.is_user_needs_pay)}>
                        <div className="post-image" key={index}>
                          <div className="">
                            <div className="gallery js-gallery">
                              <Image
                                src={postFile.post_file}
                                className="post-view-image"
                              />

                            </div>
                            {post.payment_info.is_user_needs_pay === 1 && post.payment_info.post_payment_type === 'ppv' ? 
                            <div className="gallery-top-btn-sec">
                              <Button className="subscribe-post-btn-sec" onClick={(event) => handlePPVPayment(event,1)}>{post.payment_info.payment_text}</Button>
                            </div>
                            : ''}
                            {post.payment_info.is_user_needs_pay === 1 && post.payment_info.post_payment_type === 'subscription' ? 
                            <div className="gallery-top-btn-sec" onClick={props.scrollToTop}>
                              <Button className="subscribe-post-btn-sec">{post.payment_info.payment_text}</Button>
                            </div>
                            : ''}
                          </div>
                          {modalStatus ? (
                            <Lightbox
                              mainSrc={postFile.post_file}
                              // nextSrc={images[(photoIndex + 1) % images.length]}
                              // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                              onCloseRequest={() => setModalStatus(0)}
                            />
                          ) : ''}
                        </div>
                      </Link>
                    ) : postFile.file_type === "video" ? (
                      <div className="post-image post-video" key={index}>
                        <div className="">
                          <div className="gallery js-gallery">
                            {post.payment_info.is_user_needs_pay == 1 ? (
                              <Image
                                src={
                                  postFile.preview_file
                                    ? postFile.preview_file
                                    : postFile.post_file
                                }
                                className="post-view-image"
                              />
                            ) : (
                              <ReactPlayer
                                light={postFile.preview_file}
                                url={postFile.post_file}
                                controls={true}
                                width="100%"
                                height="100%"
                                className="post-video-size"
                              />
                            )}
                            {post.payment_info.is_user_needs_pay === 1 && post.payment_info.post_payment_type === 'ppv' ? 
                            <div className="gallery-top-btn-sec">
                              <Button className="subscribe-post-btn-sec" onClick={(event) => handlePPVPayment(event,1)}>{post.payment_info.payment_text}</Button>
                            </div>
                            : ''}
                            {post.payment_info.is_user_needs_pay === 1 && post.payment_info.post_payment_type === 'subscription' ? 
                            <div className="gallery-top-btn-sec" onClick={props.scrollToTop}>
                              <Button className="subscribe-post-btn-sec">{post.payment_info.payment_text}</Button>
                            </div>
                            : ''}
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
              {localStorage.getItem("userId") != post.user_id ? (
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
              ) : null}
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
            <p>{likeCount} Likes</p>
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
                          <Link
                            className="title-container"
                            to={`/` + comment.user_unique_id}
                          >
                            <Image
                              src={comment.user_picture}
                              className="user-image img-responsive"
                            />
                          </Link>
                          <div className="user-name">
                            <span className="card-title">
                              <Link
                                className="title-container-1"
                                to={`/` + comment.user_unique_id}
                              >
                                {comment.user_displayname}{" "}
                              </Link>
                              <span className="comment-message">
                                {comment.comment}
                              </span>
                            </span>
                            <div className="comment-info-sec">
                              <ul className="list-unstyled comment-info-link">
                                <Media as="li">
                                  <p>Dec 22</p>
                                </Media>
                                {/* <Media as="li">
                                  <p>1 Like</p>
                              </Media>
                              <Media as="li">
                                  <p>Reply</p>
                              </Media> */}
                              </ul>
                            </div>
                          </div>
                          {/* <div className="whishlist-heart-icon">
                            <i className="far fa-heart"></i>
                          </div> */}
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
                        <Link className="title-container-1" to="#">
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
            post={post}
            username={post.username}
            userPicture={post.user_picture}
            name={post.user_displayname}
            post_id={post.post_id}
            user_id={post.user_id}
            amount={post.amount}
          />
          <ReportModeModal
            reportMode={reportMode}
            closeReportModeModal={closeReportModeModal}
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
