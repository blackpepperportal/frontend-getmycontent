import React, { useState, useEffect } from "react";
import ModelProfilePostSec from "./ModelProfilePostSec";
import ModelProfileTabSec from "./ModelProfileTabSec";
import ModelProfilePhotoSec from "./ModelProfilePhotoSec";
import ModelProfileVideoSec from "./ModelProfileVideoSec";
import SendTipModal from "../helper/SendTipModal";
import PaymentModal from "../helper/PaymentModal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Modal,
  Media,
} from "react-bootstrap";
import {
  fetchSingleUserProfileStart,
  fetchSingleUserPostsStart,
} from "../../store/actions/OtherUserAction";
import { saveFavStart } from "../../store/actions/FavAction";
import { saveChatUserStart } from "../../store/actions/ChatAction";
import { subscriptionPaymentStripeStart } from "../../store/actions/SubscriptionAction";
import { unFollowUserStart } from "../../store/actions/FollowAction";
import { saveBlockUserStart } from "../../store/actions/UserAction";
import { getSuccessNotificationMessage } from "../helper/NotificationMessage";
import { createNotification } from "react-redux-notify/lib/modules/Notifications";
import { CopyToClipboard } from "react-copy-to-clipboard";
import VerifiedBadgeNoShadow from "../Handlers/VerifiedBadgeNoShadow";

const ModelViewProfile = (props) => {

  const toggleVisibility = () => {
    
  };

  useEffect(() => {
    props.dispatch(
      fetchSingleUserProfileStart({
        user_unique_id: props.match.params.username,
      })
    );
    props.dispatch(
      fetchSingleUserPostsStart({
        user_unique_id: props.match.params.username,
        type: "all",
      })
    );

    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const [activeSec, setActiveSec] = useState("post");
  const [sendTip, setSendTip] = useState(false);
  const [starStatus, setStarStatus] = useState("");
  const [showUnfollow, setShowUnfollow] = useState(false);
  const [blockUserStatus, setBlockUserStatus] = useState("");

  const [subscriptionData, setSubscriptionData] = useState({
    is_free: 0,
    plan_type: "month",
    amount: 0,
    amount_formatted: 0,
  });

  const [subscrptionPayment, setPaymentModal] = useState(false);
  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const closePaymentModal = () => {
    setPaymentModal(false);
  };

  const blockStatusUpdate = () => {
    if (props.loading == false) {
      setBlockUserStatus(
        props.data.is_block_user == 1 ? "blocked" : "unblocked"
      );
    }
  };
  const handleBlockUser = (event, status, user_id) => {
    event.preventDefault();
    setBlockUserStatus(status);
    props.dispatch(
      saveBlockUserStart({
        user_id: user_id,
        is_other_profile: 1,
      })
    );
  };

  const setActiveSection = (event, key) => {
    setActiveSec(key);
    if (key === "post")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.username,
          type: "all",
        })
      );
    else if (key === "photo")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.username,
          type: "image",
        })
      );
    else if (key === "video")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.username,
          type: "video",
        })
      );
  };

  const handleUnfollowModalClose = () => setShowUnfollow(false);
  const handleUnfollowModalShow = () => setShowUnfollow(true);

  const handleUnfollow = (event, user_id) => {
    event.preventDefault();
    props.dispatch(
      unFollowUserStart({
        user_id: user_id,
      })
    );
  };

  const handleStar = (event, user_id, status) => {
    event.preventDefault();
    setStarStatus(status);
    props.dispatch(
      saveFavStart({
        user_id: user_id,
      })
    );
  };

  const handleChatUser = (event, user_id) => {
    event.preventDefault();
    props.dispatch(
      saveChatUserStart({
        from_user_id: localStorage.getItem("userId"),
        to_user_id: user_id,
      })
    );
  };

  const subscriptionPayment = (
    event,
    plan_type,
    amount,
    amount_formatted,
    is_free = 0
  ) => {
    event.preventDefault();
    setSubscriptionData({
      ...subscriptionData,
      is_free: is_free,
      plan_type: plan_type,
      amount: amount,
      amount_formatted: amount_formatted,
    });
    setPaymentModal(true);
  };

  const onCopy = (event) => {
    const notificationMessage = getSuccessNotificationMessage(
      "Link to profile was copied to clipboard!"
    );
    props.dispatch(createNotification(notificationMessage));
  };

  const { userDetails } = props;

  const scrollToTop = () => {
    console.log('adadasdas');
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>
      <div className="my-profile user-profile-page model-view-profile-sec scroll-to-top">
        <Container>
          <Row>
            {userDetails.loading ? (
              "Loading..."
            ) : (
              <Col sm={12} md={12}>
                <div className="cover-area">
                  <div className="profile-cover">
                    <Image
                      src={userDetails.data.user.cover}
                      alt={userDetails.data.user.name}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="top-left">
                    <Link to={"/home"} className="chat-header-back">
                      <Image
                        src={
                          window.location.origin +
                          "/assets/images/icons/back.svg"
                        }
                        className="svg-clone"
                      />
                    </Link>
                    <h1 className="chat-page-title">
                      {userDetails.data.user.name}
                      {"  "}
                      {userDetails.data.user.is_verified_badge == 1 ? (
                        <div className="pl-2">
                          <VerifiedBadgeNoShadow />
                        </div>
                      ) : null}
                    </h1>
                    <span className="post-count">
                      {userDetails.data.user.total_posts} Post
                    </span>
                  </div>
                </div>

                <div className="profile--user">
                  <span className="my-profile-status">
                    <Image src={userDetails.data.user.picture} />
                  </span>
                  <div className="profile-btn-group">
                    <Button
                      type="button"
                      className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                      onClick={() => setSendTip(true)}
                    >
                      <Image
                        src={
                          window.location.origin +
                          "/assets/images/icons/tip.svg"
                        }
                        className="svg-clone"
                      />
                    </Button>

                    <Button
                      type="button"
                      className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                      onClick={(event) =>
                        handleChatUser(event, userDetails.data.user.user_id)
                      }
                    >
                      <Image
                        src={
                          window.location.origin +
                          "/assets/images/icons/message.svg"
                        }
                        className="svg-clone"
                      />
                    </Button>

                    {starStatus !== "" ? (
                      <>
                        <>
                          {starStatus === "added" ? (
                            <Button
                              type="button"
                              className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                              onClick={(event) =>
                                handleStar(
                                  event,
                                  userDetails.data.user.user_id,
                                  "removed"
                                )
                              }
                            >
                              <Image
                                src={
                                  window.location.origin +
                                  "/assets/images/icons/star-active.svg"
                                }
                                className="svg-clone"
                              />
                            </Button>
                          ) : null}
                        </>
                        <>
                          {starStatus === "removed" ? (
                            <Button
                              type="button"
                              className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                              onClick={(event) =>
                                handleStar(
                                  event,
                                  userDetails.data.user.user_id,
                                  "added"
                                )
                              }
                            >
                              <Image
                                src={
                                  window.location.origin +
                                  "/assets/images/icons/star.svg"
                                }
                                className="svg-clone"
                              />
                            </Button>
                          ) : null}
                        </>
                      </>
                    ) : userDetails.data.is_favuser == 1 ? (
                      <Button
                        type="button"
                        className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                        onClick={(event) =>
                          handleStar(
                            event,
                            userDetails.data.user.user_id,
                            "removed"
                          )
                        }
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/star-active.svg"
                          }
                          className="svg-clone"
                        />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                        onClick={(event) =>
                          handleStar(
                            event,
                            userDetails.data.user.user_id,
                            "added"
                          )
                        }
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/star.svg"
                          }
                          className="svg-clone"
                        />
                      </Button>
                    )}
                    <CopyToClipboard
                      text={userDetails.data.user.share_link}
                      onCopy={onCopy}
                    >
                      <Button
                        type="button"
                        className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/share.svg"
                          }
                          className="svg-clone"
                        />
                      </Button>
                    </CopyToClipboard>
                  </div>
                  <div className="my-profile-names">
                    <div className="user-name-base-row">
                      <Link
                        to={`/` + userDetails.data.user.user_unique_id}
                        className="my-name-lg"
                      >
                        <div className="g-user--name">
                          {userDetails.data.user.name}{" "}
                          {userDetails.data.user.is_verified_badge == 1 ? (
                            <div className="pl-2">
                              <VerifiedBadgeNoShadow />
                            </div>
                          ) : null}
                        </div>
                      </Link>
                    </div>
                    <div className="user-id-row-base">
                      <Link
                        to={`/` + userDetails.data.user.user_unique_id}
                        className="user-my-id-text"
                      >
                        <div className="current-user--name">
                          @{userDetails.data.user.username}
                        </div>
                      </Link>
                      <div className="user-profile -active-status mt-1">
                        <span>{userDetails.data.user.updated_formatted}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {userDetails.data.user.website ||
                userDetails.data.user.address ||
                userDetails.data.user.amazon_wishlist ||
                userDetails.data.user.about != "null" ? (
                  <div className="profile-about-content">
                    <p className="my-profile-about">
                      {userDetails.data.user.about != "null" ? (
                        <div className="ml-1">
                          {userDetails.data.user.about}
                        </div>
                      ) : (
                        ""
                      )}

                      <p className="">
                        <div className="profile-links">
                          {userDetails.data.user.address ? (
                            <span>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {userDetails.data.user.address}
                            </span>
                          ) : null}
                        </div>

                        <div className="profile-links">
                          {userDetails.data.user.website ? (
                            <span>
                              <i className="fa fa-link"></i>{" "}
                              <a
                                href={userDetails.data.user.website}
                                rel="nofollow"
                                target="_blank"
                                className="profile-a"
                              >
                                {userDetails.data.user.website}
                              </a>
                            </span>
                          ) : null}
                        </div>
                        <div className="profile-links">
                          {userDetails.data.user.amazon_wishlist ? (
                            <span>
                              <i className="fa fa-gift"></i>{" "}
                              <a
                                href={userDetails.data.user.amazon_wishlist}
                                rel="nofollow"
                                target="_blank"
                                className="profile-a"
                              >
                                {userDetails.data.user.amazon_wishlist}
                              </a>
                            </span>
                          ) : null}
                        </div>
                        <div className="profile-links">
                            {userDetails.data.user.instagram_link ? (
                              <span className="s-icon">
                                <a
                                  href={userDetails.data.user.instagram_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/instagram.svg"
                                  }
                                  class="s_icon_16"
                                />
                                  {/* {userDetails.data.user.instagram_link} */}
                                </a>
                              </span>
                            ) : null}

                            {userDetails.data.user.facebook_link ? (
                              <span className="s-icon">
                              
                                <a
                                  href={userDetails.data.user.facebook_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/facebook.svg"
                                  }
                                  class="s_icon_16"
                                />{" "}
                                  {/* {userDetails.data.user.facebook_link} */}
                                </a>
                              </span>
                            ) : null}

                            {userDetails.data.user.twitter_link ? (
                              <span className="s-icon">
                                
                                <a
                                  href={userDetails.data.user.twitter_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/twitter.svg"
                                  }
                                  class="s_icon_16"
                                />{" "}
                                  {/* {userDetails.data.user.twitter_link} */}
                                </a>
                              </span>
                            ) : null}
                            {userDetails.data.user.youtube_link ? (
                              <span className="s-icon">
                                
                                <a
                                  href={userDetails.data.user.youtube_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/youtube.svg"
                                  }
                                  class="s_icon_16"
                                />{" "}
                                  {/* {userDetails.data.user.youtube_link} */}
                                </a>
                              </span>
                            ) : null}
                            {userDetails.data.user.linkedin_link ? (
                              <span className="s-icon">
                               
                                <a
                                  href={userDetails.data.user.linkedin_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                   <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/linkedin.svg"
                                  }
                                  class="s_icon_16"
                                />{" "}
                                  {/* {userDetails.data.user.linkedin_link} */}
                                </a>
                              </span>
                            ) : null}
                            {userDetails.data.user.pinterest_link ? (
                              <span className="s-icon">
                                
                                <a
                                  href={userDetails.data.user.pinterest_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/pinterest.svg"
                                  }
                                  class="s_icon_16"
                                />{" "}
                                  {/* {userDetails.data.user.pinterest_link} */}
                                </a>
                              </span>
                            ) : null}

                            {userDetails.data.user.twitch_link ? (
                              <span className="s-icon">
                               
                                <a
                                  href={userDetails.data.user.twitch_link}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  <img
                                  src={
                                    window.location.origin +
                                    "/assets/social/twitch.svg"
                                  }
                                  class="s_icon_16"
                                />{" "}
                                  {/* {userDetails.data.user.twitch_link} */}
                                </a>
                              </span>
                            ) : null}
                          </div>
                      </p>
                    </p>
                  </div>
                ) : null}

                {userDetails.data.is_block_user == 0 ? (
                  <>
                    {userDetails.data.payment_info.is_user_needs_pay == 1 ? (
                      userDetails.data.payment_info.is_free_account == 0 ? (
                        <>
                          <div className="subscription-section">
                            <span className="subscribe-title">
                              Monthly Subscription{" "}
                            </span>

                            <Button
                              to=""
                              className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                              onClick={(event) =>
                                subscriptionPayment(
                                  event,
                                  "month",
                                  userDetails.data.payment_info
                                    .subscription_info.monthly_amount,
                                  userDetails.data.payment_info
                                    .subscription_info.monthly_amount_formatted
                                )
                              }
                            >
                              SUBSCRIBE FOR{" "}
                              {
                                userDetails.data.payment_info.subscription_info
                                  .monthly_amount_formatted
                              }
                            </Button>
                          </div>
                          <div className="subscription-section">
                            <span className="subscribe-title">
                              Yearly Subscription{" "}
                            </span>
                            <Button
                              to=""
                              className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                              onClick={(event) =>
                                subscriptionPayment(
                                  event,
                                  "year",
                                  userDetails.data.payment_info
                                    .subscription_info.yearly_amount,
                                  userDetails.data.payment_info
                                    .subscription_info.yearly_amount_formatted
                                )
                              }
                            >
                              SUBSCRIBE FOR{" "}
                              {
                                userDetails.data.payment_info.subscription_info
                                  .yearly_amount_formatted
                              }
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div className="subscription-section">
                          <Button
                            to=""
                            className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                            onClick={(event) =>
                              props.dispatch(
                                subscriptionPaymentStripeStart({
                                  user_unique_id:
                                    userDetails.data.user.user_unique_id,
                                  plan_type: "month",
                                  is_free: 0,
                                })
                              )
                            }
                            // onClick={(event) =>
                            //   subscriptionPayment(
                            //     event,
                            //     "month",
                            //     userDetails.data.payment_info.subscription_info
                            //       .monthly_amount,
                            //     userDetails.data.payment_info.subscription_info
                            //       .monthly_amount_formatted,
                            //     1
                            //   )
                            // }
                          >
                            {userDetails.data.payment_info.payment_text}
                          </Button>
                        </div>
                      )
                    ) : (
                      ""
                    )}

                    {userDetails.data.payment_info.unsubscribe_btn_status ==
                    1 ? (
                      <>
                        <div className="subscription-section">
                          <Button
                            className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                            onClick={handleUnfollowModalShow}
                          >
                            Following
                          </Button>
                        </div>

                        <Modal
                          show={showUnfollow}
                          onHide={handleUnfollowModalClose}
                          backdrop="static"
                          keyboard={false}
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>UNSUBSCRIBE</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to cancel subscription?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              size="lg"
                              onClick={handleUnfollowModalClose}
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              size="lg"
                              onClick={(event) =>
                                handleUnfollow(
                                  event,
                                  userDetails.data.user.user_id
                                )
                              }
                            >
                              Yes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </>
                    ) : null}
                  </>
                ) : (
                  <div className="subscription-section">
                    <Link
                      to=""
                      className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                      onClick={(event) =>
                        handleBlockUser(
                          event,
                          "unblocked",
                          userDetails.data.user.user_id
                        )
                      }
                    >
                      UNBLOCK USER
                    </Link>
                  </div>
                )}

                <div className="tab" role="tabpanel">
                  <ModelProfileTabSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                    setActiveSection={setActiveSection}
                  />

                  <div className="tab-content tabs">
                    <ModelProfilePostSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
                      userPosts={props.userPosts}
                      scrollToTop={scrollToTop}
                      otherUserUniquId={props.match.params.username}
                    />

                    <ModelProfilePhotoSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
                      userPosts={props.userPosts}
                      otherUserUniquId={props.match.params.username}
                    />

                    <ModelProfileVideoSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
                      userPosts={props.userPosts}
                      otherUserUniquId={props.match.params.username}
                    />
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
      {userDetails.loading ? (
        "Loading..."
      ) : (
        <SendTipModal
          sendTip={sendTip}
          closeSendTipModal={closeSendTipModal}
          username={props.userDetails.data.user.username}
          userPicture={props.userDetails.data.user.picture}
          name={props.userDetails.data.user.name}
          post_id={null}
          user_id={props.userDetails.data.user.user_id}
        />
      )}

      {userDetails.loading ? (
        "Loading..."
      ) : (
        <PaymentModal
          subscrptionPayment={subscrptionPayment}
          closePaymentModal={closePaymentModal}
          userPicture={props.userDetails.data.user.picture}
          name={props.userDetails.data.user.name}
          user_unique_id={props.userDetails.data.user.user_unique_id}
          subscriptionData={subscriptionData}
          username={props.userDetails.data.user.username}
        />
      )}
    </>
  );
};

const mapStateToPros = (state) => ({
  comments: state.comment.comments,
  chat: state.chat,
  userDetails: state.otherUser.userDetails,
  userPosts: state.otherUser.userPosts,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ModelViewProfile);
