import React, { useState, useEffect } from "react";
import ModelProfilePostSec from "./ModelProfilePostSec";
import ModelProfileTabSec from "./ModelProfileTabSec";
import ModelProfilePhotoSec from "./ModelProfilePhotoSec";
import ModelProfileVideoSec from "./ModelProfileVideoSec";
import ModelProfileArchivedSec from "./ModelProfileArchivedSec";
import SendTipModal from "../helper/SendTipModal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import {
  fetchSingleUserProfileStart,
  fetchSingleUserPostsStart,
} from "../../store/actions/OtherUserAction";
import { saveFavStart } from "../../store/actions/FavAction";
import { subscriptionPaymentStripeStart } from "../../store/actions/SubscriptionAction";

const ModelViewProfile = (props) => {
  useEffect(() => {
    props.dispatch(
      fetchSingleUserProfileStart({ user_unique_id: props.match.params.id })
    );
    props.dispatch(
      fetchSingleUserPostsStart({
        user_unique_id: props.match.params.id,
        type: "all",
      })
    );
  }, []);

  const [activeSec, setActiveSec] = useState("post");

  const [sendTip, setSendTip] = useState(false);

  const [starStatus, setStarStatus] = useState("");

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const setActiveSection = (event, key) => {
    setActiveSec(key);
    if (key === "post")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.id,
          type: "all",
        })
      );
    else if (key === "photo")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.id,
          type: "image",
        })
      );
    else if (key === "video")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.id,
          type: "video",
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

  const subscriptionPayment = (
    event,
    plan_type,
    user_unique_id,
    is_free = 0
  ) => {
    event.preventDefault();
    props.dispatch(
      subscriptionPaymentStripeStart({
        user_unique_id,
        plan_type,
        is_free,
      })
    );
  };

  const { userDetails } = props;

  return (
    <>
      <div className="my-profile user-profile-page model-view-profile-sec">
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
                  </div>
                  <div className="my-profile-names">
                    <div className="user-name-base-row">
                      <Link to="" className="my-name-lg">
                        <div className="g-user--name">
                          {userDetails.data.user.name}
                        </div>
                      </Link>
                    </div>
                    <div className="user-id-row-base">
                      <Link to="" className="user-my-id-text">
                        <div className="current-user--name">
                          @{userDetails.data.user.username}
                        </div>
                      </Link>
                      <div className="user-profile -active-status">
                        <span>{userDetails.data.user.updated_formatted}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-about-content">
                  <p className="my-profile-about">
                    {userDetails.data.user.description}
                  </p>
                </div>

                {userDetails.data.payment_info.is_user_needs_pay ? (
                  userDetails.data.payment_info.subscription_info ? (
                    <>
                      <div className="subscription-section">
                        <span className="subscribe-title">
                          Monthly Subscription{" "}
                        </span>
                        <Link
                          to=""
                          className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                          onClick={(event) =>
                            subscriptionPayment(
                              event,
                              "month",
                              userDetails.data.user.user_unique_id
                            )
                          }
                        >
                          {userDetails.data.payment_info.payment_text}
                        </Link>
                      </div>
                      <div className="subscription-section">
                        <span className="subscribe-title">
                          Yearly Subscription{" "}
                        </span>
                        <Link
                          to=""
                          className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                          onClick={(event) =>
                            subscriptionPayment(
                              event,
                              "year",
                              userDetails.data.user.user_unique_id
                            )
                          }
                        >
                          Subscribe for{" "}
                          {
                            userDetails.data.payment_info.subscription_info
                              .yearly_amount_formatted
                          }
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="subscription-section">
                      <Link
                        to=""
                        className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                        onClick={(event) =>
                          subscriptionPayment(
                            event,
                            "month",
                            userDetails.data.user.user_unique_id,
                            1
                          )
                        }
                      >
                        {userDetails.data.payment_info.payment_text}
                      </Link>
                    </div>
                  )
                ) : (
                  ""
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
                    />

                    <ModelProfilePhotoSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
                      userPosts={props.userPosts}
                    />

                    <ModelProfileVideoSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
                      userPosts={props.userPosts}
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
        />
      )}
    </>
  );
};

const mapStateToPros = (state) => ({
  comments: state.comment.comments,
  userDetails: state.otherUser.userDetails,
  userPosts: state.otherUser.userPosts,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ModelViewProfile);
