import React, { useState } from "react";
import ModelProfilePostSec from "./ModelProfilePostSec";
import ModelProfileTabSec from "./ModelProfileTabSec";
import ModelProfilePhotoSec from "./ModelProfilePhotoSec";
import ModelProfileVideoSec from "./ModelProfileVideoSec";
import ModelProfileArchivedSec from "./ModelProfileArchivedSec";
import SendTipModal from "../helper/SendTipModal";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const ModelViewProfile = (props) => {
  const [activeSec, setActiveSec] = useState("post");

  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  return (
    <>
      <div className="my-profile user-profile-page model-view-profile-sec">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className="cover-area">
                <div className="profile-cover">
                  <Image
                    src={window.location.origin + "/assets/images/header.jpg"}
                    alt="Snow"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="top-left">
                  <Button className="chat-header-back">
                    <Image
                      src={
                        window.location.origin + "/assets/images/icons/back.svg"
                      }
                      className="svg-clone"
                    />
                  </Button>
                  <h1 className="chat-page-title">Lexy</h1>
                  <span className="post-count">74 Post</span>
                </div>

                <div className="top-right">
                  <Link
                    href="#"
                    className="g-page__header__btn m-with-round-hover has-tooltip"
                    data-original-title="null"
                  >
                    <Image
                      src={
                        window.location.origin +
                        "/assets/images/icons/vertical-dots.svg"
                      }
                      className="svg-clone"
                    />
                  </Link>
                </div>
              </div>

              <div className="profile--user">
                <span className="my-profile-status">
                  <Image
                    src={
                      window.location.origin +
                      "/assets/images/avatar/s-user-3.jpg"
                    }
                  />
                </span>
                <div className="profile-btn-group">
                  <Button
                    type="button"
                    className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                    onClick={() => setSendTip(true)}
                    // data-toggle="modal"
                    // data-target="#myModal"
                  >
                    <Image
                      src={
                        window.location.origin + "/assets/images/icons/tip.svg"
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
                  >
                    <Image
                      src={
                        window.location.origin + "/assets/images/icons/star.svg"
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
                      <div className="g-user--name">Lexy</div>
                    </Link>
                  </div>
                  <div className="user-id-row-base">
                    <Link to="" className="user-my-id-text">
                      <div className="current-user--name">@u63484651</div>
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
                  sharing more of my exclusive photos & videos with you! I want
                  to get more personal with my fans and be able to communicate
                  one on one! Subscribe here to talk with me personally, Ill be
                  uploading new private content every single day! ***I do NOT
                  post ANY adult/nude/nsfw content. I do NOT tolerate ANY
                  disrespectful messages! ***
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
                />

                <div className="tab-content tabs">
                  <ModelProfilePostSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                  />

                  <ModelProfilePhotoSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                  />

                  <ModelProfileVideoSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                  />

                  <ModelProfileArchivedSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                  />
                </div>
              </div>
            </Col>

            {/* <div className="col-md-4 col-xs-12"> */}
            {/* <div className="gallery-sidebar">
              <ul className="box-container three-cols">
                <Media as="li" className="box">
                  <div className="inner">
                    <Link to="assets/images/g-6.jpg" className="glightbox">
                      <Image src="assets/images/g-6.jpg" />
                    </Link>
                  </div>
                </Media>
                <Media as="li" className="box">
                  <div className="inner">
                    <Link to="assets/images/g-5.jpg" className="glightbox">
                      <Image src="assets/images/g-5.jpg" />
                    </a>
                  </div>
                </Media>
                <Media as="li" className="box">
                  <div className="inner">
                    <Link to="assets/images/g-4.jpg" className="glightbox">
                      <Image src="assets/images/g-4.jpg" />
                    </Link>
                  </div>
                </Media>
                <Media as="li" className="box">
                  <div className="inner">
                    <Link to="assets/images/g-3.jpg" className="glightbox">
                      <Image src="assets/images/g-3.jpg" />
                    </Link>
                  </div>
                </Media>
                <Media as="li" className="box">
                  <div className="inner">
                    <Link to="assets/images/g-2.jpg" className="glightbox">
                      <Image src="assets/images/g-2.jpg" />
                    </a>
                  </div>
                </Media>
                <Media as="li" className="box">
                  <div className="inner">
                    <Link to="assets/images/g-1.jpg" className="glightbox">
                      <Image src="assets/images/g-1.jpg" />
                    </a>
                  </div>
                </Media>
              </ul>
            </div> */}

            {/* <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <Link
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      to="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <Image
                        src="assets/images/icons/highlight.svg"
                        className="svg-clone"
                      />
                      <span className="spotify"> Highlights </span>
                    </Link>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="panel-body">
                    <div className="highlights-status">
                      <div id="stories" className="storiesWrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* </div> */}
          </Row>
        </Container>
      </div>
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </>
  );
};

export default ModelViewProfile;
