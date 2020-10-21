import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileLoader from "../../Loader/ProfileLoader";
import {
  fetchUserDetailsStart,
  editUserDetails,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";
import { Link } from "react-router-dom";

const ProfileIndex = () => {
  return (
    <>
      <section className="my-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="cover-area">
                <div className="profile-cover">
                  <img
                    src="assets/images/img-2.jpg"
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
                  <h1 className="chat-page-title">John</h1>
                  <span className="post-count">1 Post</span>
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
                  <img src="assets/images/avatar/s-user-6.jpeg" />
                </span>
                <div className="profile-btn-group">
                  <a
                    href=""
                    className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile"
                  >
                    <img
                      src="assets/images/icons/settings.svg"
                      className="svg-clone my-p-icons"
                    />
                    Edit profile
                  </a>
                  <button
                    type="button"
                    className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/share.svg"
                      className="svg-clone "
                    />
                  </button>
                </div>
                <div className="my-profile-names">
                  <div className="user-name-base-row">
                    <a href="" className="my-name-lg">
                      <div className="g-user--name">John</div>
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
                <p className="my-profile-about">Nutrition | Motivation</p>
              </div>

              <div className="profile-post-area">
                <div className="">
                  <section className="main-search ">
                    <span className="post-number">1 Post</span>
                    <button
                      type="button"
                      className="btn pull-right"
                      id="search-toggle"
                    >
                      <span className="fa fa-search"></span>
                    </button>
                    <div className="form-search stretch-to-fit">
                      <div className="search-control stretch-to-fit">
                        <input
                          type="text"
                          id="search"
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="post-list">
                <div className="post-header">
                  <div className="alignleft">
                    <a className="title-container" href="#">
                      <img
                        src="assets/images/avatar/user.jpg"
                        className="user-image img-responsive"
                      />
                      <div className="user-name">
                        <span className="post-user-name">John</span>
                        <span className="post-user-">@u63484651</span>
                      </div>
                    </a>
                  </div>
                  <div className="alignright">
                    <div className="post-header-right-side">
                      <span className="post-time">
                        {" "}
                        <span className="post-time">3 hours ago </span>
                        <div className="dropdown">
                          <button
                            className="btn btn-default dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                          >
                            <img
                              src="assets/images/icons/vertical-dots.svg"
                              className="svg-clone vertical-dots"
                            />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                              <a href="#"> Copy link to post </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                Hide paid blurred from the home feed{" "}
                              </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a href="#"> I don't like this post </a>
                            </li>
                            <li>
                              <a href="#"> Hide user's posts from feed </a>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="post-content">
                  <p>
                    VIBIN IN THE WILDERNESS!! bending over twerkin in this see
                    thru skirt as i walk up the stairs.. the camera view is
                    below me & my skirt keeps coming up! this thong isn’t
                    covering much!
                  </p>

                  <div className="post-image">
                    <div className="">
                      <img
                        className="post-photo"
                        src="assets/images/post/post4.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div className="post-icons">
                  <div className="alignleft">
                    <a href="">
                      <img
                        src="assets/images/icons/heart.svg"
                        className="svg-clone"
                      />
                    </a>
                    <a href="">
                      <img
                        src="assets/images/icons/comment.svg"
                        className="svg-clone"
                      />
                    </a>

                    <div className="modal fade" id="myModal" role="dialog">
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
                                  <div className=""> 💕🦋Sarai Rollins🦋💕</div>
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
                  <div className="alignright">
                    <a href="#">
                      <img
                        src="assets/images/icons/bookmark.svg"
                        className="svg-clone"
                      />
                    </a>
                  </div>
                </div>

                <div className="likes alignleft">
                  <p>78 Likes</p>
                  <button className="Show view-comments">
                    View 11 comments
                  </button>
                  <button className="Hide view-comments">
                    View less comments
                  </button>
                  <div id="target">
                    <div className="row comment-row">
                      <div className="alignleft">
                        <a className="title-container" href="#">
                          <img
                            src="assets/images/avatar/user.jpg"
                            className="user-image img-responsive"
                          />
                          <div className="user-name">
                            <span className="card-title">
                              Tom{" "}
                              <span className="comment-message">
                                she's breathtaking
                              </span>
                            </span>
                            <small className="text-muted cat">
                              <button>4:03 am</button>
                              <button>5 Likes</button>
                              <button>
                                {" "}
                                <i
                                  className="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </button>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div className="alignright">
                        <a href="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </a>
                      </div>
                    </div>

                    <div className="row comment-row">
                      <div className="alignleft">
                        <a className="title-container" href="#">
                          <img
                            src="assets/images/avatar/user-2.jpg"
                            className="user-image img-responsive"
                          />
                          <div className="user-name">
                            <span className="card-title">
                              Robert Maskell{" "}
                              <span className="comment-message">
                                You have your own name on a necklace?
                              </span>
                            </span>
                            <small className="text-muted cat">
                              <button>4:03 am</button>
                              <button>5 Likes</button>
                              <button>
                                {" "}
                                <i
                                  className="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </button>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div className="alignright">
                        <a href="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </a>
                      </div>
                    </div>

                    <div className="row comment-row">
                      <div className="alignleft">
                        <a className="title-container" href="#">
                          <img
                            src="assets/images/avatar/user-3.jpg"
                            className="user-image img-responsive"
                          />
                          <div className="user-name">
                            <span className="card-title">
                              -Johanaki-{" "}
                              <span className="comment-message">
                                Yes, my goddess!!!
                              </span>
                            </span>
                            <small className="text-muted cat">
                              <button>4:03 am</button>
                              <button>5 Likes</button>
                              <button>
                                {" "}
                                <i
                                  className="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </button>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div className="alignright">
                        <a href="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </a>
                      </div>
                    </div>

                    <div className="comment-box">
                      <div className="alignleft">
                        <a href="#">
                          <img src="assets/images/icons/gif.png" />
                        </a>
                      </div>
                      <div className="alignright">
                        <a href="#">
                          <img src="assets/images/icons/smile.png" />
                        </a>
                      </div>
                      <div className="comment-box-form">
                        <form className="form-inline" action="/action_page.php">
                          <div className="user-picture">
                            <a className="title-container" href="#">
                              <img
                                src="assets/images/avatar/user-3.jpg"
                                className="user-image img-responsive"
                              />
                            </a>
                          </div>
                          <div className="text-box">
                            <textarea
                              ype="text"
                              className="form-control"
                              id="comment"
                              placeholder="Add a comment"
                              name="comment"
                            ></textarea>
                          </div>
                          <button type="submit" className="custom-btn">
                            <i className="fa fa-paper-plane-o"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-12">
              <div
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
                          src="assets/images/icons/spotify.svg"
                          className="svg-clone"
                        />
                        <span className="spotify"> Spotify</span>
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
                      <div className="alignleft">
                        <h2 className="g-section-title"> Spotify account </h2>
                      </div>
                      <div className="alignright">
                        <a href="" className="conect-btn">
                          Connect
                        </a>
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

const mapStateToPros = (state) => ({
  userData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ProfileIndex);
