import React from "react";

const ListIndex = () => {
  return (
    <section class="lists">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <div class="vertical-menu">
              <div class="bookmarkes-list bookmarks-right-side">
                <div class="pull-left">
                  <a class="bookmarkes-list" href="bookmarks.html">
                    <img src="assets/images/icons/back.svg" class="svg-clone" />
                    Lists
                  </a>
                </div>
                <div class="pull-right">
                  <a class="bookmarks-filter" href="#">
                    <img
                      src="assets/images/icons/plus.svg"
                      class="svg-clone"
                      width=""
                    />
                  </a>
                </div>
              </div>

              <div class="user-lists-heading">
                <div class="pull-left">
                  <h3>CUSTOM ORDER</h3>
                </div>
                <div class="pull-right">
                  <a class="" href="#">
                    <img
                      src="assets/images/icons/sort.svg"
                      class="svg-clone"
                      width=""
                    />
                  </a>
                </div>
              </div>

              <div class="user-lists">
                <a href="following.php">
                  <div class="pull-left">
                    <h3>Fans</h3>
                    <span class="user-list-count">0 people</span>
                  </div>
                  <div class="pull-right"></div>
                </a>
              </div>

              <div class="user-lists">
                <a href="following.php">
                  <div class="pull-left">
                    <h3>Following</h3>
                    <span class="user-list-count">5 peoples</span>
                  </div>
                  <div class="pull-right">
                    <div class="user-list-avatar-lists">
                      <span class="list-avatar">
                        <img
                          src="assets/images/avatar/s-user.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span class="list-avatar">
                        <img
                          src="assets/images/avatar/s-user-3.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span class="list-avatar">
                        <img
                          src="assets/images/avatar/user-2.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span class="list-avatar">
                        <img
                          src="assets/images/avatar/user-3.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span class="list-avatar">
                        <img
                          src="assets/images/avatar/user-5.jpg"
                          alt="user-images"
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="user-lists">
                <a href="following.php">
                  <div class="pull-left">
                    <h3>Favorites</h3>
                    <span class="user-list-count">0 people</span>
                  </div>
                  <div class="pull-right"></div>
                </a>
              </div>
              <div class="user-lists">
                <a href="following.php">
                  <div class="pull-left">
                    <h3>Bookmarks</h3>
                    <span class="user-list-count">0 people</span>
                  </div>
                  <div class="pull-right"></div>
                </a>
              </div>
              <div class="user-lists">
                <a href="#">
                  <div class="pull-left">
                    <h3>Close Friends</h3>
                    <span class="user-list-count">0 people</span>
                  </div>
                  <div class="pull-right"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListIndex;
