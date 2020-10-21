import React from "react";

const BookmarkAudio = () => {
  return (
    <section className="edit-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="vertical-menu">
              <a className="bookmarkes-list " href="bookmarks.php">
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

              <a className="bookmarkes-list " href="bookmarks-videos.php">
                <img
                  src="assets/images/icons/video.svg"
                  className="svg-clone my-p-icons"
                />
                Videos
              </a>

              <a className="bookmarkes-list active" href="bookmarks-audio.php">
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
                  <h3>Audio</h3>
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

              <div className="bookmarks-videos">
                <div className="empty-message">
                  <span className="no-bookmarks">
                    <img
                      src="assets/images/icons/bookmark.svg"
                      className="svg-clone"
                      width="64"
                    />
                    <p> No bookmarks yet</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookmarkAudio;
