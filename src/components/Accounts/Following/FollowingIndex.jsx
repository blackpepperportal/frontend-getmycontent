import React from "react";

const FollowingIndex = () => {
  return (
    <section class="lists">
      <div class="container">
        <div class="row">
          <div class="profile-post-area">
            <div class="bookmarkes-list bookmarks-right-side">
              <div class="pull-left">
                <h3>
                  <img
                    src="assets/images/icons/back.svg"
                    class="svg-clone"
                    width=""
                  />{" "}
                  Following
                </h3>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12">
            <div class="listing-tab">
              <div class="tab" role="tabpanel">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active">
                    <a
                      href="#Section1"
                      class="list-tab-item"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/icons/tick-circle.svg"
                        class="svg-clone"
                      />
                      <span class="tab-nav-item"> Active (5) </span>
                    </a>
                  </li>
                  <li role="presentation" class="">
                    <a
                      href="#Section2"
                      class="list-tab-item"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/icons/warning.svg"
                        class="svg-clone"
                      />
                      <span class="tab-nav-item"> Expired (2) </span>
                    </a>
                  </li>

                  <li role="presentation" class="">
                    <a
                      href="#Section3"
                      class="list-tab-item"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/icons/all.svg"
                        class="svg-clone"
                      />
                      <span class="tab-nav-item"> All (5) </span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content tabs">
                  <div
                    role="tabpanel"
                    class="tab-pane fade in active"
                    id="Section1"
                  >
                    <div class="bookmarkes-list bookmarks-right-side">
                      <div class="pull-left">
                        <a class="bookmarkes-list" href="#">
                          <span>5 </span> ACTIVE
                        </a>
                      </div>
                      <div class="pull-right">
                        <div class="dropdown">
                          <a
                            class="bookmarks-filter dropdown-toggle"
                            href="#"
                            type="button"
                            data-toggle="dropdown"
                          >
                            <img
                              src="assets/images/icons/sort.svg"
                              class="svg-clone"
                            />
                          </a>
                          <ul class="dropdown-menu dropdown-menu-right"></ul>
                          <ul class="dropdown-menu dropdown-menu-right model-filter-dropdown">
                            <form action="#">
                              <li>
                                {" "}
                                <a role="heading" class="dropdown-header">
                                  {" "}
                                  Subscription{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a>
                                  <input
                                    type="radio"
                                    id="recent"
                                    name="sort"
                                    value="recent"
                                  />
                                  <label for="recent">Recent</label>
                                </a>
                              </li>

                              <li>
                                <a>
                                  <input
                                    type="radio"
                                    id="name"
                                    name="sort"
                                    value="name"
                                  />
                                  <label for="name">Name</label>
                                </a>
                              </li>
                            </form>
                            <li class="divider"></li>
                            <form action="#">
                              <li>
                                {" "}
                                <a role="heading" class="dropdown-header">
                                  {" "}
                                  Online Status{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a>
                                  <input
                                    type="radio"
                                    id="name"
                                    name="sort"
                                    value="name"
                                  />
                                  <label for="name">All</label>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <input
                                    type="radio"
                                    id="recent"
                                    name="sort"
                                    value="recent"
                                  />
                                  <label for="recent">Online</label>
                                </a>
                              </li>

                              <li>
                                <a>
                                  <input
                                    type="radio"
                                    id="name"
                                    name="sort"
                                    value="name"
                                  />
                                  <label for="name">Offline</label>
                                </a>
                              </li>
                            </form>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div class="follower-lists">
                        <div class="follower-subscription-lists">
                          <div class="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div class="follower-wrapper">
                                <img
                                  class="follower-cover"
                                  src="assets/images/b-2.jpg"
                                />
                              </div>
                            </a>

                            <div class="follower-profile-header">
                              <a href="#">
                                <span class="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-2.jpg"
                                    class=""
                                  />
                                </span>
                              </a>
                              <div class="follower-info">
                                <div class="follower-profile-status">
                                  <div class="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div class="follower-profile-toggle-dropdown">
                                    <a
                                      href="#"
                                      class="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        class="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div class="follower-wrapper-name">
                                  <div class="follower-profile-names">
                                    <div class="follower-name-row">
                                      <a href="user-profile.html">
                                        <div class="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            class="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div class="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        class="g-user-realname__wrapper"
                                      >
                                        <div class="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div class="add-to-lists-button">
                              <div class="swiper-favorite">
                                <button
                                  type="button"
                                  class="swiper-btn-fav"
                                  data-toggle="modal"
                                  data-target="#fav-model"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    class="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </button>
                              </div>
                            </div>
                            <div
                              class="modal fade"
                              id="AddFavorite"
                              role="dialog"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                    >
                                      &times;
                                    </button>
                                    <h4 class="modal-title"> Send tip </h4>
                                  </div>
                                  <div class="modal-body">
                                    <div class="header-userinfo">
                                      <div class="g-avatar online_status_class">
                                        <img
                                          src="assets/images/avatar/user-4.jpg"
                                          alt="💕🦋Sarai Rollins🦋💕"
                                          class="tips__user__img"
                                        />
                                      </div>
                                      <div class="popup-username-row">
                                        <div class="pop-username">
                                          <div class="">
                                            {" "}
                                            💕🦋Sarai Rollins🦋💕
                                          </div>
                                        </div>
                                      </div>
                                      <div class="popup-username-row">
                                        <span class="pop-username popuser-realname">
                                          <div class="pop-user-username">
                                            {" "}
                                            @sarairollins
                                          </div>
                                        </span>
                                      </div>
                                    </div>

                                    <div class="floating-form">
                                      <div class="floating-label">
                                        <input
                                          class="floating-input"
                                          type="text"
                                          placeholder=" "
                                        />
                                        <span class="highlight"></span>
                                        <label>Tip amount</label>
                                      </div>

                                      <div class="floating-label">
                                        <input
                                          class="floating-input"
                                          type="text"
                                          placeholder=" "
                                        />
                                        <span class="highlight"></span>
                                        <label>Message (optional)</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-default"
                                      data-dismiss="modal"
                                    >
                                      CANCEL
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-default"
                                      data-dismiss="modal"
                                    >
                                      SEND TIP
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="lists-button-group post-icons">
                              <button
                                type="button"
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">Tip</span>
                              </button>

                              <div
                                class="modal fade"
                                id="myModal"
                                role="dialog"
                              >
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <h4 class="modal-title"> Send tip </h4>
                                    </div>
                                    <div class="modal-body">
                                      <div class="header-userinfo">
                                        <div class="g-avatar online_status_class">
                                          <img
                                            src="assets/images/avatar/user-4.jpg"
                                            alt="💕🦋Sarai Rollins🦋💕"
                                            class="tips__user__img"
                                          />
                                        </div>
                                        <div class="popup-username-row">
                                          <div class="pop-username">
                                            <div class="">
                                              {" "}
                                              💕🦋Sarai Rollins🦋💕
                                            </div>
                                          </div>
                                        </div>
                                        <div class="popup-username-row">
                                          <span class="pop-username popuser-realname">
                                            <div class="pop-user-username">
                                              {" "}
                                              @sarairollins
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div class="floating-form">
                                        <div class="floating-label">
                                          <input
                                            class="floating-input"
                                            type="text"
                                            placeholder=" "
                                          />
                                          <span class="highlight"></span>
                                          <label>Tip amount</label>
                                        </div>

                                        <div class="floating-label">
                                          <input
                                            class="floating-input"
                                            type="text"
                                            placeholder=" "
                                          />
                                          <span class="highlight"></span>
                                          <label>Message (optional)</label>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-default"
                                        data-dismiss="modal"
                                      >
                                        CANCEL
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-default"
                                        data-dismiss="modal"
                                      >
                                        SEND TIP
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type="button"
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div class="follower-lists">
                        <div class="follower-subscription-lists">
                          <div class="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div class="follower-wrapper">
                                <img
                                  class="follower-cover"
                                  src="assets/images/b-5.jpg"
                                />
                              </div>
                            </a>

                            <div class="follower-profile-header">
                              <a href="user-profile.html">
                                <span class="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-5.jpg"
                                    class=""
                                  />
                                </span>
                              </a>
                              <div class="follower-info">
                                <div class="follower-profile-status">
                                  <div class="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div class="follower-profile-toggle-dropdown">
                                    <a
                                      href="#"
                                      class="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        class="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div class="follower-wrapper-name">
                                  <div class="follower-profile-names">
                                    <div class="follower-name-row">
                                      <a href="user-profile.html">
                                        <div class="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            class="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div class="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        class="g-user-realname__wrapper"
                                      >
                                        <div class="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div class="add-to-lists-button">
                              <div class="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  class="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    class="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div class="follower-lists">
                        <div class="follower-subscription-lists">
                          <div class="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div class="follower-wrapper">
                                <img
                                  class="follower-cover"
                                  src="assets/images/b-4.jpg"
                                />
                              </div>
                            </a>

                            <div class="follower-profile-header">
                              <a href="user-profile.html">
                                <span class="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-4.jpg"
                                    class=""
                                  />
                                </span>
                              </a>
                              <div class="follower-info">
                                <div class="follower-profile-status">
                                  <div class="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div class="follower-profile-toggle-dropdown">
                                    <a
                                      href="user-profile.html"
                                      class="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        class="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div class="follower-wrapper-name">
                                  <div class="follower-profile-names">
                                    <div class="follower-name-row">
                                      <a href="user-profile.html">
                                        <div class="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            class="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div class="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        class="g-user-realname__wrapper"
                                      >
                                        <div class="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div class="add-to-lists-button">
                              <div class="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  class="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    class="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section2">
                    <div class="bookmarkes-list bookmarks-right-side">
                      <div class="pull-left">
                        <a class="bookmarkes-list" href="bookmarks.html">
                          1 Expired
                        </a>
                      </div>
                      <div class="pull-right"></div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div class="follower-lists">
                        <div class="follower-subscription-lists">
                          <div class="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div class="follower-wrapper">
                                <img
                                  class="follower-cover"
                                  src="assets/images/b-5.jpg"
                                />
                              </div>
                            </a>

                            <div class="follower-profile-header">
                              <a href="user-profile.html">
                                <span class="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-2.jpg"
                                    class=""
                                  />
                                </span>
                              </a>
                              <div class="follower-info">
                                <div class="follower-profile-status">
                                  <div class="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div class="follower-profile-toggle-dropdown">
                                    <a
                                      href="user-profile.html"
                                      class="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        class="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div class="follower-wrapper-name">
                                  <div class="follower-profile-names">
                                    <div class="follower-name-row">
                                      <a href="user-profile.html">
                                        <div class="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            class="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div class="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        class="g-user-realname__wrapper"
                                      >
                                        <div class="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div class="add-to-lists-button">
                              <div class="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  class="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    class="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section3">
                    <div class="bookmarkes-list bookmarks-right-side">
                      <div class="pull-left">
                        <a class="bookmarkes-list" href="bookmarks.html">
                          6 All
                        </a>
                      </div>
                      <div class="pull-right"></div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div class="follower-lists">
                        <div class="follower-subscription-lists">
                          <div class="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div class="follower-wrapper">
                                <img
                                  class="follower-cover"
                                  src="assets/images/b-2.jpg"
                                />
                              </div>
                            </a>

                            <div class="follower-profile-header">
                              <a href="user-profile.html">
                                <span class="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-1.jpg"
                                    class=""
                                  />
                                </span>
                              </a>
                              <div class="follower-info">
                                <div class="follower-profile-status">
                                  <div class="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div class="follower-profile-toggle-dropdown">
                                    <a
                                      href="user-profile.html"
                                      class="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        class="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div class="follower-wrapper-name">
                                  <div class="follower-profile-names">
                                    <div class="follower-name-row">
                                      <a href="user-profile.html">
                                        <div class="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            class="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div class="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        class="g-user-realname__wrapper"
                                      >
                                        <div class="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="group-follower-btns">
                                    <button
                                      type="button"
                                      class="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                                    >
                                      <img
                                        src="assets/images/icons/share.svg"
                                        class="svg-clone"
                                      />{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="add-to-lists-button">
                              <div class="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  class="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    class="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div class="lists-button-group">
                              <a
                                type=""
                                class="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  class="svg-clone"
                                />
                                <span class="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowingIndex;
