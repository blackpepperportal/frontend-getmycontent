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
      <section class="my-profile">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="cover-area">
                <div class="profile-cover">
                  <img
                    src="assets/images/img-2.jpg"
                    alt="Snow"
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="top-left">
                  <button class="chat-header-back">
                    <img src="assets/images/icons/back.svg" class="svg-clone" />
                  </button>
                  <h1 class="chat-page-title">John</h1>
                  <span class="post-count">1 Post</span>
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
                  <img src="assets/images/avatar/s-user-6.jpeg" />
                </span>
                <div class="profile-btn-group">
                  <a
                    href=""
                    class="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile"
                  >
                    <img
                      src="assets/images/icons/settings.svg"
                      class="svg-clone my-p-icons"
                    />
                    Edit profile
                  </a>
                  <button
                    type="button"
                    class="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                  >
                    <img
                      src="assets/images/icons/share.svg"
                      class="svg-clone "
                    />
                  </button>
                </div>
                <div class="my-profile-names">
                  <div class="user-name-base-row">
                    <a href="" class="my-name-lg">
                      <div class="g-user--name">John</div>
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
                <p class="my-profile-about">Nutrition | Motivation</p>
              </div>

              <div class="profile-post-area">
                <div class="">
                  <section class="main-search ">
                    <span class="post-number">1 Post</span>
                    <button
                      type="button"
                      class="btn pull-right"
                      id="search-toggle"
                    >
                      <span class="fa fa-search"></span>
                    </button>
                    <div class="form-search stretch-to-fit">
                      <div class="search-control stretch-to-fit">
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
              <div class="post-list">
                <div class="post-header">
                  <div class="alignleft">
                    <a class="title-container" href="#">
                      <img
                        src="assets/images/avatar/user.jpg"
                        class="user-image img-responsive"
                      />
                      <div class="user-name">
                        <span class="post-user-name">John</span>
                        <span class="post-user-">@u63484651</span>
                      </div>
                    </a>
                  </div>
                  <div class="alignright">
                    <div class="post-header-right-side">
                      <span class="post-time">
                        {" "}
                        <span class="post-time">3 hours ago </span>
                        <div class="dropdown">
                          <button
                            class="btn btn-default dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                          >
                            <img
                              src="assets/images/icons/vertical-dots.svg"
                              class="svg-clone vertical-dots"
                            />
                          </button>
                          <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                              <a href="#"> Copy link to post </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                Hide paid blurred from the home feed{" "}
                              </a>
                            </li>
                            <li class="divider"></li>
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

                <div class="post-content">
                  <p>
                    VIBIN IN THE WILDERNESS!! bending over twerkin in this see
                    thru skirt as i walk up the stairs.. the camera view is
                    below me & my skirt keeps coming up! this thong isn’t
                    covering much!
                  </p>

                  <div class="post-image">
                    <div class="">
                      <img
                        class="post-photo"
                        src="assets/images/post/post4.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div class="post-icons">
                  <div class="alignleft">
                    <a href="">
                      <img
                        src="assets/images/icons/heart.svg"
                        class="svg-clone"
                      />
                    </a>
                    <a href="">
                      <img
                        src="assets/images/icons/comment.svg"
                        class="svg-clone"
                      />
                    </a>

                    <div class="modal fade" id="myModal" role="dialog">
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
                                  <div class=""> 💕🦋Sarai Rollins🦋💕</div>
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
                  <div class="alignright">
                    <a href="#">
                      <img
                        src="assets/images/icons/bookmark.svg"
                        class="svg-clone"
                      />
                    </a>
                  </div>
                </div>

                <div class="likes alignleft">
                  <p>78 Likes</p>
                  <button class="Show view-comments">View 11 comments</button>
                  <button class="Hide view-comments">View less comments</button>
                  <div id="target">
                    <div class="row comment-row">
                      <div class="alignleft">
                        <a class="title-container" href="#">
                          <img
                            src="assets/images/avatar/user.jpg"
                            class="user-image img-responsive"
                          />
                          <div class="user-name">
                            <span class="card-title">
                              Tom{" "}
                              <span class="comment-message">
                                she's breathtaking
                              </span>
                            </span>
                            <small class="text-muted cat">
                              <button>4:03 am</button>
                              <button>5 Likes</button>
                              <button>
                                {" "}
                                <i
                                  class="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </button>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div class="alignright">
                        <a href="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </a>
                      </div>
                    </div>

                    <div class="row comment-row">
                      <div class="alignleft">
                        <a class="title-container" href="#">
                          <img
                            src="assets/images/avatar/user-2.jpg"
                            class="user-image img-responsive"
                          />
                          <div class="user-name">
                            <span class="card-title">
                              Robert Maskell{" "}
                              <span class="comment-message">
                                You have your own name on a necklace?
                              </span>
                            </span>
                            <small class="text-muted cat">
                              <button>4:03 am</button>
                              <button>5 Likes</button>
                              <button>
                                {" "}
                                <i
                                  class="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </button>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div class="alignright">
                        <a href="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </a>
                      </div>
                    </div>

                    <div class="row comment-row">
                      <div class="alignleft">
                        <a class="title-container" href="#">
                          <img
                            src="assets/images/avatar/user-3.jpg"
                            class="user-image img-responsive"
                          />
                          <div class="user-name">
                            <span class="card-title">
                              -Johanaki-{" "}
                              <span class="comment-message">
                                Yes, my goddess!!!
                              </span>
                            </span>
                            <small class="text-muted cat">
                              <button>4:03 am</button>
                              <button>5 Likes</button>
                              <button>
                                {" "}
                                <i
                                  class="fas fa-users text-info"
                                  style={{ display: "none" }}
                                ></i>{" "}
                                Reply
                              </button>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div class="alignright">
                        <a href="#">
                          <img src="assets/images/icons/heart.svg" width="16" />
                        </a>
                      </div>
                    </div>

                    <div class="comment-box">
                      <div class="alignleft">
                        <a href="#">
                          <img src="assets/images/icons/gif.png" />
                        </a>
                      </div>
                      <div class="alignright">
                        <a href="#">
                          <img src="assets/images/icons/smile.png" />
                        </a>
                      </div>
                      <div class="comment-box-form">
                        <form class="form-inline" action="/action_page.php">
                          <div class="user-picture">
                            <a class="title-container" href="#">
                              <img
                                src="assets/images/avatar/user-3.jpg"
                                class="user-image img-responsive"
                              />
                            </a>
                          </div>
                          <div class="text-box">
                            <textarea
                              ype="text"
                              class="form-control"
                              id="comment"
                              placeholder="Add a comment"
                              name="comment"
                            ></textarea>
                          </div>
                          <button type="submit" class="custom-btn">
                            <i class="fa fa-paper-plane-o"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xs-12">
              <div
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
                          src="assets/images/icons/spotify.svg"
                          class="svg-clone"
                        />
                        <span class="spotify"> Spotify</span>
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
                      <div class="alignleft">
                        <h2 class="g-section-title"> Spotify account </h2>
                      </div>
                      <div class="alignright">
                        <a href="" class="conect-btn">
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
