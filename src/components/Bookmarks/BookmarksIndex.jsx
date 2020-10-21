import React from "react";

const BookmarksIndex = () => {
  return (
    <section className=" edit-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="vertical-menu">
              <a className="bookmarkes-list active" href="bookmarks.php">
                <img src="assets/images/icons/back.svg" className="svg-clone" />
                BOOKMARKS
              </a>

              <a className="bookmarkes-list " href="bookmarks-photos.php">
                <img
                  src="assets/images/icons/gallery.svg"
                  className="svg-clone my-p-icons"
                />
                Photos
              </a>

              <a className="bookmarkes-list" href="bookmarks-videos.php">
                <img
                  src="assets/images/icons/video.svg"
                  className="svg-clone my-p-icons"
                />
                Videos
              </a>

              <a className="bookmarkes-list" href="bookmarks-audio.php">
                <img
                  src="assets/images/icons/audio.svg"
                  className="svg-clone my-p-icons"
                />
                Audio
              </a>

              <a className="bookmarkes-list" href="bookmarks-other.php">
                <img
                  src="assets/images/icons/other.svg"
                  className="svg-clone my-p-icons"
                />
                Other
              </a>

              <a className="bookmarkes-list" href="bookmarks-locked.php">
                <img
                  src="assets/images/icons/lock.svg"
                  className="svg-clone my-p-icons"
                />
                Locked
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-post-area">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <h3>ALL BOOKMARKS</h3>
                </div>
                <div className="pull-right">
                  <a className="bookmarks-filter" href="#">
                    <img
                      src="assets/images/icons/sort.svg"
                      className="svg-clone"
                    />
                  </a>
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
                  thru skirt as i walk up the stairs.. the camera view is below
                  me & my skirt keeps coming up! this thong isn’t covering much!
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
        </div>
      </div>
    </section>
  );
};

export default BookmarksIndex;
