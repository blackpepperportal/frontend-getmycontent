import React from "react";

const ModelProfileArchivedSec = (props) => {
  return (
    <div
      role="tabpanel"
      className={
        props.activeSec === "archive"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section4"
    >
      <div className="profile-post-area">
        <div className="alignleft">
          <span className="post-number">43 ARCHIVED POSTS</span>
        </div>
        <div className="alignright">
          <div className="profile-search-post">
            <form className="searchbox">
              <input
                type="search"
                placeholder="Search......"
                name="search"
                className="searchbox-input"
                onkeyup="buttonUp();"
                required
              />
              <input type="submit" className="searchbox-submit" value="" />
              <span className="searchbox-icon">
                <img
                  src="assets/images/icons/search.svg"
                  className="svg-clone"
                />
              </span>
            </form>
          </div>
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
                      <a href="#"> Hide paid blurred from the home feed </a>
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
            VIBIN IN THE WILDERNESS!! bending over twerkin in this see thru
            skirt as i walk up the stairs.. the camera view is below me & my
            skirt keeps coming up! this thong isn’t covering much!
          </p>

          <div className="post-image">
            <div className="">
              <img className="post-photo" src="assets/images/post/post4.jpg" />
            </div>
          </div>
        </div>

        <div className="post-icons">
          <div className="alignleft">
            <a href="">
              <img src="assets/images/icons/heart.svg" className="svg-clone" />
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
          <button className="Show view-comments">View 11 comments</button>
          <button className="Hide view-comments">View less comments</button>
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
  );
};

export default ModelProfileArchivedSec;
