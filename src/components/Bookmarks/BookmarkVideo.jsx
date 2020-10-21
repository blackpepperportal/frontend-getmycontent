import React from "react";

const BookmarkVideo = () => {
  return (
    <section class="edit-profile">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-12">
            <div class="vertical-menu">
              <a class="bookmarkes-list " href="bookmarks.php">
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

              <a class="bookmarkes-list active" href="bookmarks-videos.php">
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
                  <h3>Videos</h3>
                </div>
                <div class="pull-right">
                  <a class="bookmarks-filter" href="#">
                    <img src="assets/images/icons/sort.svg" class="svg-clone" />
                  </a>
                </div>
              </div>

              <div class="bookmarks-photos">
                <ul class="box-container three-cols">
                  <li class="box">
                    <div class="inner">
                      <a
                        href="assets/images/videos/demo-1.mp4"
                        class="glightbox3"
                      >
                        <img src="assets/images/g-4.jpg" alt="image" />
                      </a>
                    </div>
                  </li>
                  <li class="box">
                    <div class="inner">
                      <a
                        href="assets/images/videos/demo-2.mp4"
                        class="glightbox3"
                      >
                        <img src="assets/images/g-2.jpg" alt="image" />
                      </a>
                    </div>
                  </li>
                  <li class="box">
                    <div class="inner">
                      <a
                        href="assets/images/videos/demo-1.mp4"
                        class="glightbox3"
                      >
                        <img src="assets/images/g-3.jpg" alt="image" />
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

export default BookmarkVideo;
