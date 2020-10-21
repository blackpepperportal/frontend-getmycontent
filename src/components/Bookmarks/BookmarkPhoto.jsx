import React from "react";

const BookmarkPhoto = () => {
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

              <a className="bookmarkes-list active" href="bookmarks-photos.php">
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
                  <h3>PHOTOS</h3>
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

              <div className="bookmarks-photos">
                <ul className="box-container three-cols">
                  <li className="box">
                    <div className="inner">
                      <a href="assets/images/g-6.jpg" className="glightbox">
                        <img src="assets/images/g-6.jpg" />
                      </a>
                    </div>
                  </li>
                  <li className="box">
                    <div className="inner">
                      <a href="assets/images/g-5.jpg" className="glightbox">
                        <img src="assets/images/g-5.jpg" />
                      </a>
                    </div>
                  </li>
                  <li className="box">
                    <div className="inner">
                      <a href="assets/images/g-4.jpg" className="glightbox">
                        <img src="assets/images/g-4.jpg" />
                      </a>
                    </div>
                  </li>
                  <li className="box">
                    <div className="inner">
                      <a href="assets/images/g-3.jpg" className="glightbox">
                        <img src="assets/images/g-3.jpg" />
                      </a>
                    </div>
                  </li>
                  <li className="box">
                    <div className="inner">
                      <a href="assets/images/g-2.jpg" className="glightbox">
                        <img src="assets/images/g-2.jpg" />
                      </a>
                    </div>
                  </li>
                  <li className="box">
                    <div className="inner">
                      <a href="assets/images/g-1.jpg" className="glightbox">
                        <img src="assets/images/g-1.jpg" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookmarkPhoto;
