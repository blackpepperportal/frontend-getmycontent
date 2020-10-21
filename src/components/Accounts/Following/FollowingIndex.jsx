import React from "react";

const FollowingIndex = () => {
  return (
    <section className="lists">
      <div className="container">
        <div className="row">
          <div className="profile-post-area">
            <div className="bookmarkes-list bookmarks-right-side">
              <div className="pull-left">
                <h3>
                  <img
                    src="assets/images/icons/back.svg"
                    className="svg-clone"
                    width=""
                  />{" "}
                  Following
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
            <div className="listing-tab">
              <div className="tab" role="tabpanel">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a
                      href="#Section1"
                      className="list-tab-item"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/icons/tick-circle.svg"
                        className="svg-clone"
                      />
                      <span className="tab-nav-item"> Active (5) </span>
                    </a>
                  </li>
                  <li role="presentation" className="">
                    <a
                      href="#Section2"
                      className="list-tab-item"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/icons/warning.svg"
                        className="svg-clone"
                      />
                      <span className="tab-nav-item"> Expired (2) </span>
                    </a>
                  </li>

                  <li role="presentation" className="">
                    <a
                      href="#Section3"
                      className="list-tab-item"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/icons/all.svg"
                        className="svg-clone"
                      />
                      <span className="tab-nav-item"> All (5) </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content tabs">
                  <div
                    role="tabpanel"
                    className="tab-pane fade in active"
                    id="Section1"
                  >
                    <div className="bookmarkes-list bookmarks-right-side">
                      <div className="pull-left">
                        <a className="bookmarkes-list" href="#">
                          <span>5 </span> ACTIVE
                        </a>
                      </div>
                      <div className="pull-right">
                        <div className="dropdown">
                          <a
                            className="bookmarks-filter dropdown-toggle"
                            href="#"
                            type="button"
                            data-toggle="dropdown"
                          >
                            <img
                              src="assets/images/icons/sort.svg"
                              className="svg-clone"
                            />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-right"></ul>
                          <ul className="dropdown-menu dropdown-menu-right model-filter-dropdown">
                            <form action="#">
                              <li>
                                {" "}
                                <a role="heading" className="dropdown-header">
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
                            <li className="divider"></li>
                            <form action="#">
                              <li>
                                {" "}
                                <a role="heading" className="dropdown-header">
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

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="follower-lists">
                        <div className="follower-subscription-lists">
                          <div className="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div className="follower-wrapper">
                                <img
                                  className="follower-cover"
                                  src="assets/images/b-2.jpg"
                                />
                              </div>
                            </a>

                            <div className="follower-profile-header">
                              <a href="#">
                                <span className="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-2.jpg"
                                    className=""
                                  />
                                </span>
                              </a>
                              <div className="follower-info">
                                <div className="follower-profile-status">
                                  <div className="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div className="follower-profile-toggle-dropdown">
                                    <a
                                      href="#"
                                      className="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        className="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="follower-wrapper-name">
                                  <div className="follower-profile-names">
                                    <div className="follower-name-row">
                                      <a href="user-profile.html">
                                        <div className="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            className="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        className="g-user-realname__wrapper"
                                      >
                                        <div className="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div className="add-to-lists-button">
                              <div className="swiper-favorite">
                                <button
                                  type="button"
                                  className="swiper-btn-fav"
                                  data-toggle="modal"
                                  data-target="#fav-model"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    className="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </button>
                              </div>
                            </div>
                            <div
                              className="modal fade"
                              id="AddFavorite"
                              role="dialog"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                    >
                                      &times;
                                    </button>
                                    <h4 className="modal-title"> Send tip </h4>
                                  </div>
                                  <div className="modal-body">
                                    <div className="header-userinfo">
                                      <div className="g-avatar online_status_class">
                                        <img
                                          src="assets/images/avatar/user-4.jpg"
                                          alt="💕🦋Sarai Rollins🦋💕"
                                          className="tips__user__img"
                                        />
                                      </div>
                                      <div className="popup-username-row">
                                        <div className="pop-username">
                                          <div className="">
                                            {" "}
                                            💕🦋Sarai Rollins🦋💕
                                          </div>
                                        </div>
                                      </div>
                                      <div className="popup-username-row">
                                        <span className="pop-username popuser-realname">
                                          <div className="pop-user-username">
                                            {" "}
                                            @sarairollins
                                          </div>
                                        </span>
                                      </div>
                                    </div>

                                    <div className="floating-form">
                                      <div className="floating-label">
                                        <input
                                          className="floating-input"
                                          type="text"
                                          placeholder=" "
                                        />
                                        <span className="highlight"></span>
                                        <label>Tip amount</label>
                                      </div>

                                      <div className="floating-label">
                                        <input
                                          className="floating-input"
                                          type="text"
                                          placeholder=" "
                                        />
                                        <span className="highlight"></span>
                                        <label>Message (optional)</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      data-dismiss="modal"
                                    >
                                      CANCEL
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      data-dismiss="modal"
                                    >
                                      SEND TIP
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="lists-button-group post-icons">
                              <button
                                type="button"
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">Tip</span>
                              </button>

                              <div
                                className="modal fade"
                                id="myModal"
                                role="dialog"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        &times;
                                      </button>
                                      <h4 className="modal-title">
                                        {" "}
                                        Send tip{" "}
                                      </h4>
                                    </div>
                                    <div className="modal-body">
                                      <div className="header-userinfo">
                                        <div className="g-avatar online_status_class">
                                          <img
                                            src="assets/images/avatar/user-4.jpg"
                                            alt="💕🦋Sarai Rollins🦋💕"
                                            className="tips__user__img"
                                          />
                                        </div>
                                        <div className="popup-username-row">
                                          <div className="pop-username">
                                            <div className="">
                                              {" "}
                                              💕🦋Sarai Rollins🦋💕
                                            </div>
                                          </div>
                                        </div>
                                        <div className="popup-username-row">
                                          <span className="pop-username popuser-realname">
                                            <div className="pop-user-username">
                                              {" "}
                                              @sarairollins
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="floating-form">
                                        <div className="floating-label">
                                          <input
                                            className="floating-input"
                                            type="text"
                                            placeholder=" "
                                          />
                                          <span className="highlight"></span>
                                          <label>Tip amount</label>
                                        </div>

                                        <div className="floating-label">
                                          <input
                                            className="floating-input"
                                            type="text"
                                            placeholder=" "
                                          />
                                          <span className="highlight"></span>
                                          <label>Message (optional)</label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                      >
                                        CANCEL
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                      >
                                        SEND TIP
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type="button"
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="follower-lists">
                        <div className="follower-subscription-lists">
                          <div className="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div className="follower-wrapper">
                                <img
                                  className="follower-cover"
                                  src="assets/images/b-5.jpg"
                                />
                              </div>
                            </a>

                            <div className="follower-profile-header">
                              <a href="user-profile.html">
                                <span className="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-5.jpg"
                                    className=""
                                  />
                                </span>
                              </a>
                              <div className="follower-info">
                                <div className="follower-profile-status">
                                  <div className="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div className="follower-profile-toggle-dropdown">
                                    <a
                                      href="#"
                                      className="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        className="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="follower-wrapper-name">
                                  <div className="follower-profile-names">
                                    <div className="follower-name-row">
                                      <a href="user-profile.html">
                                        <div className="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            className="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        className="g-user-realname__wrapper"
                                      >
                                        <div className="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div className="add-to-lists-button">
                              <div className="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  className="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    className="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="follower-lists">
                        <div className="follower-subscription-lists">
                          <div className="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div className="follower-wrapper">
                                <img
                                  className="follower-cover"
                                  src="assets/images/b-4.jpg"
                                />
                              </div>
                            </a>

                            <div className="follower-profile-header">
                              <a href="user-profile.html">
                                <span className="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-4.jpg"
                                    className=""
                                  />
                                </span>
                              </a>
                              <div className="follower-info">
                                <div className="follower-profile-status">
                                  <div className="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div className="follower-profile-toggle-dropdown">
                                    <a
                                      href="user-profile.html"
                                      className="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        className="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="follower-wrapper-name">
                                  <div className="follower-profile-names">
                                    <div className="follower-name-row">
                                      <a href="user-profile.html">
                                        <div className="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            className="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        className="g-user-realname__wrapper"
                                      >
                                        <div className="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div className="add-to-lists-button">
                              <div className="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  className="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    className="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="Section2">
                    <div className="bookmarkes-list bookmarks-right-side">
                      <div className="pull-left">
                        <a className="bookmarkes-list" href="bookmarks.html">
                          1 Expired
                        </a>
                      </div>
                      <div className="pull-right"></div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="follower-lists">
                        <div className="follower-subscription-lists">
                          <div className="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div className="follower-wrapper">
                                <img
                                  className="follower-cover"
                                  src="assets/images/b-5.jpg"
                                />
                              </div>
                            </a>

                            <div className="follower-profile-header">
                              <a href="user-profile.html">
                                <span className="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-2.jpg"
                                    className=""
                                  />
                                </span>
                              </a>
                              <div className="follower-info">
                                <div className="follower-profile-status">
                                  <div className="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div className="follower-profile-toggle-dropdown">
                                    <a
                                      href="user-profile.html"
                                      className="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        className="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="follower-wrapper-name">
                                  <div className="follower-profile-names">
                                    <div className="follower-name-row">
                                      <a href="user-profile.html">
                                        <div className="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            className="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        className="g-user-realname__wrapper"
                                      >
                                        <div className="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="group-follower-btns">
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
                                </div>
                              </div>
                            </div>

                            <div className="add-to-lists-button">
                              <div className="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  className="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    className="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">
                                  Subscribed for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="Section3">
                    <div className="bookmarkes-list bookmarks-right-side">
                      <div className="pull-left">
                        <a className="bookmarkes-list" href="bookmarks.html">
                          6 All
                        </a>
                      </div>
                      <div className="pull-right"></div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="follower-lists">
                        <div className="follower-subscription-lists">
                          <div className="follower-subscription-inner">
                            <a href="user-profile.html">
                              <div className="follower-wrapper">
                                <img
                                  className="follower-cover"
                                  src="assets/images/b-2.jpg"
                                />
                              </div>
                            </a>

                            <div className="follower-profile-header">
                              <a href="user-profile.html">
                                <span className="follower-profile-avatar">
                                  <img
                                    src="assets/images/avatar/b-1.jpg"
                                    className=""
                                  />
                                </span>
                              </a>
                              <div className="follower-info">
                                <div className="follower-profile-status">
                                  <div className="follower-status-text">
                                    Last seen
                                    <span title="Oct 12, 1:33 pm">
                                      {" "}
                                      2 hours ago{" "}
                                    </span>
                                  </div>
                                  <div className="follower-profile-toggle-dropdown">
                                    <a
                                      href="user-profile.html"
                                      className="btn dropdown-toggle btn-link"
                                    >
                                      <img
                                        src="assets/images/icons/vertical-dots.svg"
                                        className="svg-clone vertical-dots"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="follower-wrapper-name">
                                  <div className="follower-profile-names">
                                    <div className="follower-name-row">
                                      <a href="user-profile.html">
                                        <div className="follower-user-name">
                                          🤍🦋Sarai Rollins🦋🤍
                                          <img
                                            src="assets/images/icons/verified.svg"
                                            className="svg-clone m-verified"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="follower-name-row">
                                      <a
                                        href="user-profile.html"
                                        className="g-user-realname__wrapper"
                                      >
                                        <div className="follower-user-id">
                                          @sarairollins
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="group-follower-btns">
                                    <button
                                      type="button"
                                      className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                                    >
                                      <img
                                        src="assets/images/icons/share.svg"
                                        className="svg-clone"
                                      />{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="add-to-lists-button">
                              <div className="swiper-favorite">
                                <a
                                  href="user-profile.html"
                                  className="swiper-btn-fav"
                                >
                                  <img
                                    src="assets/images/icons/star.svg"
                                    className="svg-clone my-p-icons"
                                    width="12"
                                  />
                                  Add to favorites and other lists
                                </a>
                              </div>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/tip.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">Tip</span>
                              </a>
                            </div>

                            <div className="lists-button-group">
                              <a
                                type=""
                                className="g-btn m-rounded m-border m-profile m-with-icon"
                              >
                                <img
                                  src="assets/images/icons/subscribe.svg"
                                  className="svg-clone"
                                />
                                <span className="b-btn-text">
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
