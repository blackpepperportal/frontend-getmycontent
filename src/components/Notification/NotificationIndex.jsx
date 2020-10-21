import React from "react";

const NotificationIndex = () => {
  return (
    <>
      <section className="notification-page" id="tabs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-post-area">
                <div className="bookmarkes-list bookmarks-right-side">
                  <div className="pull-left">
                    <a
                      className="bookmarkes-list notify-title"
                      href="bookmarks.php"
                    >
                      <img
                        src="assets/images/icons/back.svg"
                        className="svg-clone"
                      />{" "}
                      Notifications
                    </a>
                  </div>
                  <div className="pull-right">
                    <a className="bookmarks-filter" href="#">
                      <img
                        src="assets/images/icons/settings.svg"
                        className="svg-clone"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="tabbable-panel">
                <div className="tabbable-line">
                  <ul className="nav nav-tabs ">
                    <li className="active">
                      <a href="#" data-toggle="tab">
                        <span>
                          <img
                            src="assets/images/icons/all.svg"
                            className="svg-clone"
                          />
                        </span>{" "}
                        All{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tab">
                        <span>
                          <img
                            src="assets/images/icons/comment.svg"
                            className="svg-clone"
                          />
                        </span>{" "}
                        Interactions{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tab">
                        <span>
                          <img
                            src="assets/images/icons/heart.svg"
                            className="svg-clone"
                          />
                        </span>{" "}
                        Liked{" "}
                      </a>
                    </li>

                    <li>
                      <a href="#" data-toggle="tab">
                        <span>
                          <img
                            src="assets/images/icons/unlock.svg"
                            className="svg-clone"
                          />
                        </span>{" "}
                        Subscribed{" "}
                      </a>
                    </li>

                    <li>
                      <a href="#" data-toggle="tab">
                        <span>
                          <img
                            src="assets/images/icons/tip.svg"
                            className="svg-clone"
                          />
                        </span>{" "}
                        Tipped{" "}
                      </a>
                    </li>

                    <li>
                      <a href="#" data-toggle="tab">
                        <span>
                          <img
                            src="assets/images/icons/warning.svg"
                            className="svg-clone"
                          />
                        </span>{" "}
                        Promotions{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_default_1">
                      <h3 className="notify-title">ALL</h3>
                      <div className="notification-list">
                        <div className="notify-item">
                          <div className="post-header">
                            <div className="alignleft">
                              <a className="title-container" href="#">
                                <img
                                  src="assets/images/avatar/user.jpg"
                                  className="user-image img-responsive"
                                />
                                <div className="user-name">
                                  <span className="post-user-name">
                                    Lexy can i?
                                    <span className="user-id">@lexycani</span>
                                  </span>
                                  <span className="post-user-notify">
                                    Mentioned you in a post
                                  </span>
                                  <span className="post-user-notify-date">
                                    Aug 30
                                  </span>
                                </div>
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
      </section>
    </>
  );
};

export default NotificationIndex;
