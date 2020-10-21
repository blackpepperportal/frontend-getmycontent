import React from "react";

const BookmarksIndex = () => {
  return (
    <section class=" edit-profile">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-12">
            <div class="vertical-menu">
              <a class="bookmarkes-list active" href="bookmarks.php">
                <img src="assets/images/icons/back.svg" class="svg-clone" />
                BOOKMARKS
              </a>

              <a class="bookmarkes-list " href="bookmarks-photos.php">
                <img
                  src="assets/images/icons/gallery.svg"
                  class="svg-clone my-p-icons"
                />
                Photos
              </a>

              <a class="bookmarkes-list" href="bookmarks-videos.php">
                <img
                  src="assets/images/icons/video.svg"
                  class="svg-clone my-p-icons"
                />
                Videos
              </a>

              <a class="bookmarkes-list" href="bookmarks-audio.php">
                <img
                  src="assets/images/icons/audio.svg"
                  class="svg-clone my-p-icons"
                />
                Audio
              </a>

              <a class="bookmarkes-list" href="bookmarks-other.php">
                <img
                  src="assets/images/icons/other.svg"
                  class="svg-clone my-p-icons"
                />
                Other
              </a>

              <a class="bookmarkes-list" href="bookmarks-locked.php">
                <img
                  src="assets/images/icons/lock.svg"
                  class="svg-clone my-p-icons"
                />
                Locked
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <div class="profile-post-area">
              <div class="bookmarkes-list bookmarks-right-side">
                <div class="pull-left">
                  <h3>ALL BOOKMARKS</h3>
                </div>
                <div class="pull-right">
                  <a class="bookmarks-filter" href="#">
                    <img src="assets/images/icons/sort.svg" class="svg-clone" />
                  </a>
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
                  thru skirt as i walk up the stairs.. the camera view is below
                  me & my skirt keeps coming up! this thong isn’t covering much!
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
        </div>
      </div>
    </section>
  );
};

export default BookmarksIndex;
