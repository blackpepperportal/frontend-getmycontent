import React from "react";

const ModelProfileArchivedSec = (props) => {
  return (
    <div
      role="tabpanel"
      class={
        props.activeSec === "archive"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section4"
    >
      <div class="profile-post-area">
        <div class="alignleft">
          <span class="post-number">43 ARCHIVED POSTS</span>
        </div>
        <div class="alignright">
          <div class="profile-search-post">
            <form class="searchbox">
              <input
                type="search"
                placeholder="Search......"
                name="search"
                class="searchbox-input"
                onkeyup="buttonUp();"
                required
              />
              <input type="submit" class="searchbox-submit" value="" />
              <span class="searchbox-icon">
                <img src="assets/images/icons/search.svg" class="svg-clone" />
              </span>
            </form>
          </div>
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
                      <a href="#"> Hide paid blurred from the home feed </a>
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
            VIBIN IN THE WILDERNESS!! bending over twerkin in this see thru
            skirt as i walk up the stairs.. the camera view is below me & my
            skirt keeps coming up! this thong isn’t covering much!
          </p>

          <div class="post-image">
            <div class="">
              <img class="post-photo" src="assets/images/post/post4.jpg" />
            </div>
          </div>
        </div>

        <div class="post-icons">
          <div class="alignleft">
            <a href="">
              <img src="assets/images/icons/heart.svg" class="svg-clone" />
            </a>
            <a href="">
              <img src="assets/images/icons/comment.svg" class="svg-clone" />
            </a>

            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
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
                          <div class="pop-user-username"> @sarairollins</div>
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
              <img src="assets/images/icons/bookmark.svg" class="svg-clone" />
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
                      <span class="comment-message">she's breathtaking</span>
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
                      <span class="comment-message">Yes, my goddess!!!</span>
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
  );
};

export default ModelProfileArchivedSec;
