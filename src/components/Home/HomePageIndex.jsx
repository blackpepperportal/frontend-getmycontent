import React from "react";
import HomePageSuggesstion from "./HomePageSuggesstion";

const HomePageIndex = () => {
  return (
    <>
      <section class="home-screen">
        <div class="container">
          <div class="row search-row">
            <div class="search-section">
              <a href="#" class="search-button">
                Home
              </a>
              <div class="search-container">
                <form action="/search" method="get">
                  <input
                    class="search expandright"
                    id="searchright"
                    type="search"
                    name="q"
                    placeholder="Search"
                  />
                  <label class="button searchbutton" for="searchright">
                    <span class="mglass">&#9906;</span>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div class="">
            <div class="col-md-8 custom-padding">
              <div class="container">
                <div class="row">
                  <div id="stories" class="storiesWrapper"></div>
                </div>
              </div>

              <div class="post-list">
                <div class="post-header">
                  <div class="alignleft">
                    <a class="title-container" href="user-profile.php">
                      <img
                        src="assets/images/avatar/user.jpg"
                        class="user-image img-responsive"
                      />
                      <div class="user-name">
                        <span class="post-user-name">Lexy</span>
                        <span class="post-user-">@lexypanterratwerk</span>
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
                      <span class="post-time">
                        {" "}
                        <span class="post-tip-lock">$30 </span>
                        <a href="#">
                          <i class="fa fa-lock"></i>
                        </a>
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
                      <div class="gallery js-gallery">
                        <img
                          src="assets/images/g-3.jpg"
                          class="post-view-image"
                        />
                      </div>
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

                    <button
                      type=""
                      class="g-icon"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      <img
                        src="assets/images/icons/tip.svg"
                        class="svg-clone"
                      />

                      <span class="post-tip">SEND TIP</span>
                    </button>

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
                                Looks nice necklace?
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
                        <form class="form-inline" action="">
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
            <HomePageSuggesstion />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageIndex;
