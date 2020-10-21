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
      <section class="my-profile user-profile-page">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="cover-area">
                <div class="profile-cover">
                  <img
                    src="assets/images/header.jpg"
                    alt="Snow"
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="top-left">
                  <button class="chat-header-back">
                    <img src="assets/images/icons/back.svg" class="svg-clone" />
                  </button>
                  <h1 class="chat-page-title">Lexy</h1>
                  <span class="post-count">74 Post</span>
                </div>

                <div class="top-right">
                  <a
                    href="#"
                    class="g-page__header__btn m-with-round-hover has-tooltip"
                    data-original-title="null"
                  >
                    <img
                      src="assets/images/icons/vertical-dots.svg"
                      class="svg-clone"
                    />
                  </a>
                </div>
              </div>

              <div class="profile--user">
                <span class="my-profile-status">
                  <img src="assets/images/avatar/s-user-3.jpg" />
                </span>
                <div class="profile-btn-group">
                  <button
                    type="button"
                    class="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                    onClick={() => setSendTip(true)}
                    // data-toggle="modal"
                    // data-target="#myModal"
                  >
                    <img src="assets/images/icons/tip.svg" class="svg-clone" />
                  </button>

                  <button
                    type="button"
                    class="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/message.svg"
                      class="svg-clone"
                    />
                  </button>

                  <button
                    type="button"
                    class="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img src="assets/images/icons/star.svg" class="svg-clone" />
                  </button>

                  <button
                    type="button"
                    class="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/share.svg"
                      class="svg-clone"
                    />
                  </button>
                </div>
                <div class="my-profile-names">
                  <div class="user-name-base-row">
                    <a href="" class="my-name-lg">
                      <div class="g-user--name">Lexy</div>
                    </a>
                  </div>
                  <div class="user-id-row-base">
                    <a href="" class="user-my-id-text">
                      <div class="current-user--name">@u63484651</div>
                    </a>
                    <div class="user-profile -active-status">
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="profile-about-content">
                <p class="my-profile-about">
                  Hi Everyone! Welcome to my Only Fans! I’m so excited to be
                  sharing more of my exclusive photos & videos with you! I want
                  to get more personal with my fans and be able to communicate
                  one on one! Subscribe here to talk with me personally, Ill be
                  uploading new private content every single day! ***I do NOT
                  post ANY adult/nude/nsfw content. I do NOT tolerate ANY
                  disrespectful messages! ***
                </p>
              </div>

              <div class="subscription-section">
                <span class="subscribe-title">Free Subscription </span>
                <a
                  href=""
                  class="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile user-follow"
                >
                  Follow For Free
                </a>
              </div>

              <div class="tab" role="tabpanel">
                <ModelProfileTabSec
                  activeSec={activeSec}
                  setActiveSec={setActiveSec}
                />

                <div class="tab-content tabs">
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

            {/* <div class="col-md-4 col-xs-12"> */}
            {/* <div class="gallery-sidebar">
              <ul class="box-container three-cols">
                <li class="box">
                  <div class="inner">
                    <a href="assets/images/g-6.jpg" class="glightbox">
                      <img src="assets/images/g-6.jpg" />
                    </a>
                  </div>
                </li>
                <li class="box">
                  <div class="inner">
                    <a href="assets/images/g-5.jpg" class="glightbox">
                      <img src="assets/images/g-5.jpg" />
                    </a>
                  </div>
                </li>
                <li class="box">
                  <div class="inner">
                    <a href="assets/images/g-4.jpg" class="glightbox">
                      <img src="assets/images/g-4.jpg" />
                    </a>
                  </div>
                </li>
                <li class="box">
                  <div class="inner">
                    <a href="assets/images/g-3.jpg" class="glightbox">
                      <img src="assets/images/g-3.jpg" />
                    </a>
                  </div>
                </li>
                <li class="box">
                  <div class="inner">
                    <a href="assets/images/g-2.jpg" class="glightbox">
                      <img src="assets/images/g-2.jpg" />
                    </a>
                  </div>
                </li>
                <li class="box">
                  <div class="inner">
                    <a href="assets/images/g-1.jpg" class="glightbox">
                      <img src="assets/images/g-1.jpg" />
                    </a>
                  </div>
                </li>
              </ul>
            </div> */}

            {/* <div
              class="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                  <h4 class="panel-title">
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
                        class="svg-clone"
                      />
                      <span class="spotify"> Highlights </span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  class="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div class="panel-body">
                    <div class="highlights-status">
                      <div id="stories" class="storiesWrapper"></div>
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
