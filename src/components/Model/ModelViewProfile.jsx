import React, { useState } from "react";
import ModelProfilePostSec from "./ModelProfilePostSec";
import ModelProfileTabSec from "./ModelProfileTabSec";
import ModelProfilePhotoSec from "./ModelProfilePhotoSec";
import ModelProfileVideoSec from "./ModelProfileVideoSec";
import ModelProfileArchivedSec from "./ModelProfileArchivedSec";
import SendTipModal from "../helper/SendTipModal";

const ModelViewProfile = () => {
  const [activeSec, setActiveSec] = useState("post");

  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  return (
    <>
      <section className="my-profile user-profile-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cover-area">
                <div className="profile-cover">
                  <img
                    src="assets/images/header.jpg"
                    alt="Snow"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="top-left">
                  <button className="chat-header-back">
                    <img
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                  </button>
                  <h1 className="chat-page-title">Lexy</h1>
                  <span className="post-count">74 Post</span>
                </div>

                <div className="top-right">
                  <a
                    href="#"
                    className="g-page__header__btn m-with-round-hover has-tooltip"
                    data-original-title="null"
                  >
                    <img
                      src="assets/images/icons/vertical-dots.svg"
                      className="svg-clone"
                    />
                  </a>
                </div>
              </div>

              <div className="profile--user">
                <span className="my-profile-status">
                  <img src="assets/images/avatar/s-user-3.jpg" />
                </span>
                <div className="profile-btn-group">
                  <button
                    type="button"
                    className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                    onClick={() => setSendTip(true)}
                    // data-toggle="modal"
                    // data-target="#myModal"
                  >
                    <img
                      src="assets/images/icons/tip.svg"
                      className="svg-clone"
                    />
                  </button>

                  <button
                    type="button"
                    className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/message.svg"
                      className="svg-clone"
                    />
                  </button>

                  <button
                    type="button"
                    className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/star.svg"
                      className="svg-clone"
                    />
                  </button>

                  <button
                    type="button"
                    className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/share.svg"
                      className="svg-clone"
                    />
                  </button>
                </div>
                <div className="my-profile-names">
                  <div className="user-name-base-row">
                    <a href="" className="my-name-lg">
                      <div className="g-user--name">Lexy</div>
                    </a>
                  </div>
                  <div className="user-id-row-base">
                    <a href="" className="user-my-id-text">
                      <div className="current-user--name">@u63484651</div>
                    </a>
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
                <a
                  href=""
                  className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                >
                  Follow For Free
                </a>
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
            </div>

            {/* <div className="col-md-4 col-xs-12"> */}
            {/* <div className="gallery-sidebar">
              <ul className="box-container three-cols">
                <li className="box">
                  <div className="inner">
                    <a href="assets/images/g-6.jpg" className="glightbox">
                      <img src="assets/images/g-6.jpg" />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a href="assets/images/g-5.jpg" className="glightbox">
                      <img src="assets/images/g-5.jpg" />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a href="assets/images/g-4.jpg" className="glightbox">
                      <img src="assets/images/g-4.jpg" />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a href="assets/images/g-3.jpg" className="glightbox">
                      <img src="assets/images/g-3.jpg" />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a href="assets/images/g-2.jpg" className="glightbox">
                      <img src="assets/images/g-2.jpg" />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a href="assets/images/g-1.jpg" className="glightbox">
                      <img src="assets/images/g-1.jpg" />
                    </a>
                  </div>
                </li>
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
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <img
                        src="assets/images/icons/highlight.svg"
                        className="svg-clone"
                      />
                      <span className="spotify"> Highlights </span>
                    </a>
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
          </div>
        </div>
      </section>
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </>
  );
};

export default ModelViewProfile;
