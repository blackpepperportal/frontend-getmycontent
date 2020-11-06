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
          type: "photos",
        })
      );
    else if (key === "video")
      props.dispatch(
        fetchSingleUserPostsStart({
          user_unique_id: props.match.params.id,
          type: "videos",
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
                    <Button className="chat-header-back">
                      <Image
                        src={
                          window.location.origin +
                          "/assets/images/icons/back.svg"
                        }
                        className="svg-clone"
                      />
                    </Button>
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

                    <Button
                      type="button"
                      className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                      onClick={() =>
                        props.dispatch(
                          saveFavStart({
                            user_id: userDetails.data.user.user_id,
                          })
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
                          {userDetails.data.user.first_name}
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
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-about-content">
                  <p className="my-profile-about">
                    Hi Everyone! Welcome to my Only Fans! I’m so excited to be
                    sharing more of my exclusive photos & videos with you! I
                    want to get more personal with my fans and be able to
                    communicate one on one! Subscribe here to talk with me
                    personally, Ill be uploading new private content every
                    single day! ***I do NOT post ANY adult/nude/nsfw content. I
                    do NOT tolerate ANY disrespectful messages! ***
                  </p>
                </div>

                <div className="subscription-section">
                  <span className="subscribe-title">Free Subscription </span>
                  <Link
                    to=""
                    className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                  >
                    Follow For Free
                  </Link>
                </div>

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
                    />

                    <ModelProfileVideoSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
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
